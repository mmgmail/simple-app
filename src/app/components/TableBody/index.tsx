
import './style.scss';
 interface Props {
  getTableProps: any,
  getTableBodyProps: any,
  firstPageRows: any,
  prepareRow: any
 }

const TableBody = ({
  getTableProps,
  getTableBodyProps,
  firstPageRows,
  prepareRow
}: Props) => {
  return (
    <div
      className="table-body"
      {...getTableProps}
    >
      <div {...getTableBodyProps()}>
        {firstPageRows.map((row: any) => {
          prepareRow(row)
          return (
            <div {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                return <div {...cell.getCellProps()}>{cell.render('Cell')}</div>
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TableBody