import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { deleteDepartment, getActiveDepartments } from "../../services/DepartmentService";
import Modal from "../../components/Modal";
import DepartmentForm from "../../components/DepartmentForm";
import { Column, Department } from "../../@types";
import Portal from "../../components/Portal/Portal";
import TableActions from "../../components/TableActions";

export default function Departments(): JSX.Element {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editDepartmentId, setEditDepartmentId] = useState<number>(0);
  const [departments, setDepartments] = useState<Department[]>([]);

  async function fetchDepartments() {
    const res = await getActiveDepartments();
    setDepartments(res);
  }

  useEffect(() => {
    fetchDepartments();
  }, []);

  function handleEdit(departmentId: number) {
    setEditDepartmentId(departmentId);
    toggleEditModal();
  }

  async function handleDelete(departmentId: number) {
    await deleteDepartment(departmentId);
    await fetchDepartments();
  }

  function toggleEditModal() {
    setIsEditModalOpen(!isEditModalOpen);
    if (isEditModalOpen) fetchDepartments();
  }

  const columns: Column[] = [
    { title: "Department Name", displayValue: "name", customComponent: false },
    {
      title: "Actions",
      customComponent: true,
      component: TableActions,
      handleEdit,
      handleDelete,
    },
  ];

  return (
    <main>
      <Table columns={columns} data={departments} />

      {isEditModalOpen ? (
        <Portal id="edit-departments-modal">
          <Modal onClose={toggleEditModal}>
            <DepartmentForm
              isEditing={true}
              editDepartmentId={editDepartmentId}
              setEditDepartmentId={setEditDepartmentId}
              toggleEditModal={toggleEditModal}
            />
          </Modal>
        </Portal>
      ) : null}
    </main>
  );
}
