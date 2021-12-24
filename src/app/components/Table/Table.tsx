import styles from "./Table.module.css";
import TableRow from "../TableRow";
import { BaseEntity, Column } from "../../@types";

type TableProps = {
  columns: Column[];
  data: BaseEntity[];
};

export default function Table({ columns, data }: TableProps): JSX.Element {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map(column => {
            return (
              <th
                key={column.title}
                data-testid={`table-header-${column.title.toLowerCase().replace(" ", "-")}`}
              >
                {column.title}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {data.map(row => {
          return <TableRow key={row.id} row={row} columns={columns} />;
        })}
      </tbody>
    </table>
  );
}
