
import './style.scss';
 interface Props {
  getTableProps: any,
  getTableBodyProps: any,
  prepareRow: any,
  page: any,
  data: any
 }

const TableBody = ({
  getTableProps,
  getTableBodyProps,
  page,
  prepareRow,
  data
}: Props) => {
  return (
    data.length ? <div
      className="table-body"
      {...getTableProps}
    >
      <div
        className="table-body__inner"
        {...getTableBodyProps()}>
        {page.map((row: any) => {
          prepareRow(row)
          return (
            <div
              className="table-body__inner_row"
              {...row.getRowProps()}
            >
              {row.cells.map((cell: any) => {
                return <div
                  className="table-body__inner_cell"
                  {...cell.getCellProps({
                    style: {
                      minWidth: cell.column.minWidth,
                      maxWidth: cell.column.maxWidth,
                      width: cell.column.width,
                    },
                  })}
                >{cell.render('Cell')}</div>
              })}
            </div>
          )
        })}
      </div>
    </div> : <>Loading ...</>
  )
}

export default TableBody