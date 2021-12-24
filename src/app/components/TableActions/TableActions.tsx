import { BaseEntity } from "../../@types";

type TableActionsProps = {
  row: BaseEntity;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
};

export default function TableActions({ row, handleEdit, handleDelete }: TableActionsProps): JSX.Element {
  return (
    <>
      <button
        className="btn"
        onClick={() => handleEdit(row.id)}
        data-testid={`row-${row.id}-edit-link`}
      >
        Edit
      </button>
      <button
        className="btn is_warning"
        onClick={() => handleDelete(row.id)}
        data-testid={`row-${row.id}-delete-button`}
      >
        Delete
      </button>
    </>
  );
}
