import { useEffect, useState } from "react";
import { Employee } from "../../@types";
import { getEmployeesWithNoManagers } from "../../services/EmployeeService";

import OrgNode from "../../components/OrgNode";

export default function OrgChartPage(): JSX.Element {
  const [managers, setManagers] = useState<Employee[] | null>(null);

  useEffect(() => {
    fetchEmployeesWithNoManagers();
  }, []);

  async function fetchEmployeesWithNoManagers() {
    const employeeWithNoManagers = await getEmployeesWithNoManagers();
    setManagers(employeeWithNoManagers);
  }

  return (
    <section className="container">
      {managers?.map(manager => {
        return <OrgNode key={manager.id} employeeId={manager.id} />;
      })}
    </section>
  );
}
