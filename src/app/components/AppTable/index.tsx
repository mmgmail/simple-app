import { useEffect, useState, useMemo } from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination
} from 'react-table';

import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import './style.scss';

const AppTable = () => {
  const [data, setData] = useState([]);

  const columns = useMemo(() => [
    {
      Header: 'First Name',
      accessor: 'first_name',
      width: '100%'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
      width: '100%'
    },
    {
      Header: 'Email',
      accessor: 'email',
      width: '100%'
    },
    {
      Header: 'Gender',
      accessor: 'gender',
      width: '100%'
    },
    {
      Header: 'City',
      accessor: 'city',
      width: '100%'
    },
    {
      Header: 'Company Name',
      accessor: 'company_name',
      width: '100%'
    },
  ], []);

  const getUsersData = () => {
    return fetch('./mock/users.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json())
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useGlobalFilter,
    usePagination
  )

  useEffect(() => {
    if (!data.length) {
      getUsersData();
    }
    return () => {
      setData([]);
    };
  }, []);

  return (
    <div className="app-table">
      <TableHeader
        getTableProps={getTableProps}
        headerGroups={headerGroups}
      />
      {data.length ? 
      <>
        <TableBody
          getTableProps={getTableProps}
          getTableBodyProps={getTableBodyProps}
          page={page}
          prepareRow={prepareRow}
        /> 
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
      </> : <>Loading ...</>}
    </div>
  )
}

export default AppTable