import EmployeeForm from "../../components/EmployeeForm";

export default function CreateEmployee(): JSX.Element {
  return (
    <main>
      <EmployeeForm isEditing={false} />
    </main>
  );
}
