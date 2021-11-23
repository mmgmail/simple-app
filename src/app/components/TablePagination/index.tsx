import './style.scss';

interface Props {
  gotoPage: any;
  canPreviousPage: any;
  previousPage: any;
  nextPage: any;
  pageCount: any;
  canNextPage: any;
  pageIndex: any;
  pageOptions: any;
  pageSize: any;
  setPageSize: any;
}

const TablePagination = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  pageCount,
  canNextPage,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize
}: Props) => {
  return (
    <div className="pagination">
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>{' '}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <span>
        | Go to page:{' '}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
          style={{ width: '100px' }}
        />
      </span>{' '}
      <select
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div> 
  )
}

export default TablePagination;