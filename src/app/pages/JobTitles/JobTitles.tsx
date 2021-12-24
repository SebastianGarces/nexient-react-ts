import { useEffect, useState } from "react";
import { Column, JobTitle } from "../../@types";
import JobTitleForm from "../../components/JobTitleForm/JobTitleForm";
import Modal from "../../components/Modal";
import Portal from "../../components/Portal/Portal";
import Table from "../../components/Table";
import TableActions from "../../components/TableActions";
import { deleteJobTitle, getJobTitles } from "../../services/JobTitleService";

export default function JobTitles(): JSX.Element {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editJobTitleId, setEditJobTitleId] = useState<number>(0);
  const [jobTitles, setJobTitles] = useState<JobTitle[]>([]);

  async function fetchJobTitles() {
    const res = await getJobTitles();
    setJobTitles(res);
  }

  useEffect(() => {
    fetchJobTitles();
  }, []);

  function handleEdit(jobTitleId: number) {
    setEditJobTitleId(jobTitleId);
    toggleEditModal();
  }

  async function handleDelete(jobTitleId: number) {
    await deleteJobTitle(jobTitleId);
    await fetchJobTitles();
  }

  function toggleEditModal() {
    setIsEditModalOpen(!isEditModalOpen);
    if (isEditModalOpen) fetchJobTitles();
  }

  const columns: Column[] = [
    { title: "Job Title", displayValue: "name", customComponent: false },
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
      <Table columns={columns} data={jobTitles} />

      {isEditModalOpen ? (
        <Portal id="edit-departments-modal">
          <Modal onClose={toggleEditModal}>
            <JobTitleForm
              isEditing={true}
              editJobTitleId={editJobTitleId}
              setEditJobTitleId={setEditJobTitleId}
              toggleEditModal={toggleEditModal}
            />
          </Modal>
        </Portal>
      ) : null}
    </main>
  );
}
