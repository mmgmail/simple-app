
import './style.scss';
 interface Props {
  getTableProps: any,
  headerGroups: any
 }

const TableHeader = ({
  getTableProps,
  headerGroups
}: Props) => {
  return (
    <div
      className="table-header"
      {...getTableProps}
    >
      <div className="table-header__head">
        {headerGroups.map((headerGroup: any) => (
          <div
            className="table-header__head_row"
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column: any) => (
              <div
                className="table-header__head_cell"
                {...column.getHeaderProps({
                  style: {
                    minWidth: column.minWidth,
                    maxWidth: column.maxWidth,
                    width: column.width,
                  }
                })}
              >
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  )
}

export default TableHeader