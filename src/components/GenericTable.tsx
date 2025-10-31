import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";


interface GenericTableProps<T> {
  title?: string;
  columns: {header: string; accessor: string}[];
  data: T[];
  maxHeight?: string;
}

export function GenericTable<T extends Record<string, unknown>>({
  title,
  columns,
  data,
  maxHeight = "800px",
}: GenericTableProps<T>) {
  return (
    <div className="flex flex-col gap-10 h-screen p-5">
      {title && <h1 className="text-5xl font-bold text-gray-600">{title}</h1>}

      <div
        className={`overflow-y-auto border rounded-lg`}
        style={{ maxHeight }}
      >
        <Table hoverable>
          <TableHead className="sticky top-0 bg-gray-200 z-10">
            <TableRow>
              {columns.map((col) => (
                <TableHeadCell key={String(col.accessor)}>
                  {col.header}
                </TableHeadCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody className="divide-y">
            {data.map((row, i) => (
              <TableRow
                key={i}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                {columns.map((col) => (
                  <TableCell
                    key={String(col.accessor)}
                    className="whitespace-nowrap text-gray-900 dark:text-white"
                  >
                    {String(row[col.accessor])}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
