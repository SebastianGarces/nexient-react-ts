import { Dispatch, useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import useForm from "../../hooks/useForm";
import {
  getEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
} from "../../services/EmployeeService";
import { getActiveDepartments } from "../../services/DepartmentService";
import { getJobTitles } from "../../services/JobTitleService";
import validateEmployee from "../../utils/validateEmployee";
import Form from "../Form";
import Select from "../Select/Select";
import { Employee, Department, JobTitle, CreateEmployee } from "../../@types";

type EmployeeFormProps =
  | {
      isEditing: true;
      editEmployeeId: number;
      toggleEditModal: () => void;
      setEditEmployeeId: Dispatch<number>;
    }
  | { isEditing: false };

export default function EmployeeForm(props: EmployeeFormProps): JSX.Element {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [jobTitles, setJobTitles] = useState<JobTitle[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const { addToast } = useToasts();

  const fetchDepartments = () => {
    getActiveDepartments().then(setDepartments);
  };

  const fetchJobTitles = () => {
    getJobTitles().then(setJobTitles);
  };

  const fetchEmployees = () => {
    getEmployees().then(setEmployees);
  };

  useEffect(() => {
    fetchDepartments();
    fetchJobTitles();
    fetchEmployees();
  }, []);

  const initialFormState = {
    firstName: "",
    lastName: "",
    middleInitial: "",
    email: "",
    jobTitle: 0,
    department: 0,
    manager: 0,
  };

  const { register, handleSubmit, setValue, errors, reset } = useForm<CreateEmployee>(
    initialFormState,
    validateEmployee,
    onSubmit
  );

  async function onSubmit(data: CreateEmployee) {
    const manager = employees.find(employee => employee.id === Number(data.manager));
    const jobTitle = jobTitles.find(jobTitle => jobTitle.id === Number(data.jobTitle));
    const department = departments.find(department => department.id === Number(data.department));

    const employee = {
      ...data,
      manager,
      jobTitle,
      department,
      isManager: true,
      isActive: true,
    };

    try {
      if (props.isEditing) {
        await updateEmployee({ ...employee, id: props.editEmployeeId });
      } else {
        await createEmployee(employee);
      }

      addToast("Employee saved", { appearance: "success", autoDismiss: true });
      reset();

      if (props.isEditing) {
        props.setEditEmployeeId(0);
        props.toggleEditModal();
      }
    } catch (error) {
      addToast("Error submiting form", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }

  useEffect(
    function setEmployeeFields() {
      if (props.isEditing) {
        getEmployeeById(props.editEmployeeId).then(res => {
          setValue("firstName", res.firstName);
          setValue("lastName", res.lastName);
          setValue("middleInitial", res.middleInitial);
          !!res?.jobTitle?.id && setValue("jobTitle", res.jobTitle.id);
          !!res?.department?.id && setValue("department", res.department.id);
          !!res?.manager?.id && setValue("manager", res.manager.id);
        });
      }
    },
    [props.isEditing]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset className="horizontal">
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...register("firstName")} data-testid="create-employee-first-name" />
      </fieldset>
      {errors.firstName ? <p className="error_message">{errors.firstName}</p> : null}

      <fieldset className="horizontal">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...register("lastName")} data-testid="create-employee-last-name" />
      </fieldset>
      {errors.lastName ? <p className="error_message">{errors.lastName}</p> : null}

      <fieldset className="horizontal">
        <label htmlFor="middleInitial">Middle Initial</label>
        <input
          type="text"
          {...register("middleInitial")}
          data-testid="create-employee-middle-initial"
        />
      </fieldset>

      <fieldset className="horizontal">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          {...register("email")}
          data-testid="create-employee-email"
        />
      </fieldset>

      <Select
        name="jobTitle"
        label="Job Title"
        options={jobTitles}
        getOptionValue={job => job.name}
        register={register}
        className="horizontal"
        cyTestId="create-employee-job-title"
      />
      {errors.jobTitle ? <p className="error_message">{errors.jobTitle}</p> : null}

      <Select
        name="department"
        label="Department"
        options={departments}
        getOptionValue={department => department.name}
        register={register}
        className="horizontal"
        cyTestId="create-employee-department"
      />

      <Select
        name="manager"
        label="Manager"
        options={employees}
        getOptionValue={employee => `${employee.firstName} ${employee.lastName}`}
        register={register}
        className="horizontal"
        cyTestId="create-employee-manager"
      />

      <button type="submit" className="btn" data-testid="create-employee-save-button">
        Save
      </button>
    </Form>
  );
}
