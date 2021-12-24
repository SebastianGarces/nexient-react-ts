import { useEffect, useState } from "react";
import { Column, Employee } from "../../@types";
import EmployeeForm from "../../components/EmployeeForm";
import Modal from "../../components/Modal";
import Portal from "../../components/Portal/Portal";
import Table from "../../components/Table";
import TableActions from "../../components/TableActions";
import { deleteEmployee, getEmployees } from "../../services/EmployeeService";

export default function Employees(): JSX.Element {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState<number>(0);
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    const fetchedEmployees = await getEmployees();
    setEmployees(fetchedEmployees);
  }

  function handleEdit(employeeId: number) {
    setEditEmployeeId(employeeId);
    toggleEditModal();
  }

  async function handleDelete(employeeId: number) {
    await deleteEmployee(employeeId);
    await fetchEmployees();
  }

  function toggleEditModal() {
    setIsEditModalOpen(!isEditModalOpen);
    if (isEditModalOpen) fetchEmployees();
  }

  const columns: Column[] = [
    { title: "First Name", displayValue: "firstName", customComponent: false },
    { title: "Last Name", displayValue: "lastName", customComponent: false },
    { title: "Middle Initial", displayValue: "middleInitial", customComponent: false },
    {
      title: "Actions",
      customComponent: true,
      component: TableActions,
      handleEdit,
      handleDelete,
    },
  ];

  console.log({ isEditModalOpen, editEmployeeId });

  return (
    <main>
      {employees ? <Table columns={columns} data={employees} /> : null}

      {isEditModalOpen ? (
        <Portal id="edit-departments-modal">
          <Modal onClose={toggleEditModal}>
            <EmployeeForm
              isEditing={true}
              editEmployeeId={editEmployeeId}
              setEditEmployeeId={setEditEmployeeId}
              toggleEditModal={toggleEditModal}
            />
          </Modal>
        </Portal>
      ) : null}
    </main>
  );
}
