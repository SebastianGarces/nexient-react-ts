import { BaseEntity, Column } from "../../@types";

type TableRowProps = {
  row: BaseEntity;
  columns: Column[];
};

export default function TableRow({ row, columns }: TableRowProps): JSX.Element {
  return (
    <tr>
      {columns.map(Column => {
        return (
          <td
            key={row.id + Column.title}
            data-testid={`table-row-${row.id}-column-${Column.title
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            {Column.customComponent ? (
              <Column.component
                row={row}
                handleEdit={Column.handleEdit}
                handleDelete={Column.handleDelete}
              />
            ) : (
              row[Column.displayValue]
            )}
          </td>
        );
      })}
    </tr>
  );
}
