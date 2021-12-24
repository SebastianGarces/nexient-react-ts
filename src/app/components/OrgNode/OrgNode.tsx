import { useEffect, useState } from "react";
import { Employee } from "../../@types";
import { getEmployeeById, getEmployeesByManagerId } from "../../services/EmployeeService";
import styles from "./OrgNode.module.css";

type OrgNodeProps = {
  employeeId: number;
};

export default function OrgNode({ employeeId }: OrgNodeProps): JSX.Element {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [showEmployees, setShowEmployees] = useState(false);
  const [employees, setEmployees] = useState<Employee[] | null>(null);

  async function fetchEmployee() {
    const employeeRes = await getEmployeeById(employeeId);
    setEmployee(employeeRes);
  }

  async function fetchEmployees() {
    const employeesRes = await getEmployeesByManagerId(employeeId);
    setEmployees(employeesRes);
  }

  function toggleShowEmployees() {
    setShowEmployees(!showEmployees);
  }

  useEffect(() => {
    fetchEmployee();
  }, []);

  useEffect(() => {
    if (showEmployees) fetchEmployees();
  }, [showEmployees]);

  return (
    <div className={styles.container}>
      <div className={styles.employeeCard}>
        {employee ? (
          <>
            <h3 data-testid={`${employee.id}-display-name`}>
              {employee.firstName} {employee.lastName}
            </h3>
            <p className={styles.employeeTitle} data-testid={`${employee.id}-job-title`}>
              {employee?.jobTitle?.name}
            </p>
            <button
              className="btn"
              data-testid={`${employee.id}-${showEmployees ? "hide" : "show"}-employees-button`}
              onClick={toggleShowEmployees}
            >
              {showEmployees ? "Hide" : "Show"}
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {showEmployees ? (
        <div className={styles.orgContainer}>
          {employees?.map(employee => {
            return <OrgNode key={employee.id} employeeId={employee.id} />;
          })}
        </div>
      ) : null}
    </div>
  );
}
