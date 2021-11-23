
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
              <div {...column.gediveaderProps()}>
                {column.render('Header')}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  )
}

export default TableHeader