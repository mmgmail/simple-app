import './style.scss';

interface Props {
  gotoPage: (num: number) => void;
  canPreviousPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  pageCount: number;
  canNextPage: boolean;
  pageIndex: number;
  pageOptions: any;
  pageSize: any;
  setPageSize: (num: number) => void;
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