import { Dispatch, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import useForm from "../../hooks/useForm";
import validateDepartment from "../../utils/validateDepartment";
import Form from "../Form";
import {
  createDepartment,
  getDepartmentById,
  updateDepartment,
} from "../../services/DepartmentService";
import { CreateDepartment } from "../../@types";

type DepartmentFormProps =
  | {
      isEditing: true;
      editDepartmentId: number;
      toggleEditModal: () => void;
      setEditDepartmentId: Dispatch<number>;
    }
  | { isEditing: false };

export default function DepartmentForm(props: DepartmentFormProps): JSX.Element {
  const { addToast } = useToasts();

  const initialFormState = { name: "" };
  const { register, handleSubmit, setValue, errors, reset } = useForm<CreateDepartment>(
    initialFormState,
    validateDepartment,
    onSubmit
  );

  useEffect(() => {
    if (props.isEditing) {
      getDepartmentById(props.editDepartmentId).then(res => {
        setValue("name", res.name);
      });
    }
  }, [props.isEditing]);

  async function onSubmit(data: CreateDepartment) {
    const department = { name: data.name, isActive: true };
    try {
      if (props.isEditing) {
        await updateDepartment({
          ...department,
          id: props.editDepartmentId,
        });
      } else {
        await createDepartment(department);
      }

      addToast("Department saved", { appearance: "success", autoDismiss: true });
      reset();

      if (props.isEditing) {
        props.setEditDepartmentId(0);
        props.toggleEditModal();
      }
    } catch (error) {
      addToast("Error submiting form", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Department name</label>
        <input type="text" data-testid="create-department-name" {...register("name")} />
      </fieldset>
      {errors.name ? <p className="error_message">{errors.name}</p> : null}

      <button type="submit" className="btn" data-testid="create-department-save-button">
        Save
      </button>
    </Form>
  );
}
