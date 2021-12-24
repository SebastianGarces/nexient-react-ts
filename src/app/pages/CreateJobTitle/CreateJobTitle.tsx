import JobTitleForm from "../../components/JobTitleForm/JobTitleForm";

export default function Form(): JSX.Element {
  return (
    <main>
      <JobTitleForm isEditing={false} />
    </main>
  );
}
