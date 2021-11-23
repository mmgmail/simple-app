import { useEffect, useState, useMemo } from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useAsyncDebounce
} from 'react-table';
import { useNavigate } from "react-router-dom";

import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import TablePagination from '../TablePagination';
import './style.scss';

interface Filter {
  preGlobalFilteredRows: any,
  globalFilter: any,
  setGlobalFilter: any
}

const GlobalFilter = ({
  globalFilter,
  setGlobalFilter,
}: Filter) => {
  
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <div className="table-search">
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={'type to search...'}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </div>
  )
}

const AppTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  const columns = useMemo(() => [
    {
      Header: 'Actions',
      accessor: '[editButton]',
      Cell: (cellObj: any) => {
        return (
          <div>
            <button onClick={() => pushEditScreen(cellObj.row.original.id)}>Edit</button>
            <br />
            <button>Delete</button>
          </div>
        )
      }
    },
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

  const pushEditScreen = (userId: any) => {
    navigate(`${userId}`);
  };

  const pushNewUserScreen = () => {
    navigate('new');
  }

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
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

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
      <div className="app-table__top">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <button onClick={pushNewUserScreen}>Add New User</button>
      </div>
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
        <TablePagination
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          previousPage={previousPage}
          nextPage={nextPage}
          pageCount={pageCount}
          canNextPage={canNextPage}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </> : <>Loading ...</>}
    </div>
  )
}

export default AppTable