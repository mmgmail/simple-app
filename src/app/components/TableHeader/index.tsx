
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
      <div>
        {headerGroups.map((headerGroup: any) => (
          <div {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <div {...column.getHeaderProps()}>
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