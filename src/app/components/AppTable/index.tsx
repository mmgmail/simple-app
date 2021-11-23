import { useEffect, useState, useMemo } from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter
} from 'react-table';

import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

const AppTable = () => {
  const [data, setData] = useState([]);

  const columns = useMemo(() => [
    {
      Header: 'First Name',
      accessor: 'first_name',
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    {
      Header: 'Company Name',
      accessor: 'company_name',
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
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useGlobalFilter
  )

  const firstPageRows = rows.slice(0, 10);

  useEffect(() => {
    if (!data.length) {
      getUsersData();
    }
    return () => {
      setData([]); // This worked for me
    };
  }, []);

  return (
    <div className="app-table">
      <TableHeader
        getTableProps={getTableProps}
        headerGroups={headerGroups}
      />
      {data.length ? 
        <TableBody
          getTableProps={getTableProps}
          getTableBodyProps={getTableBodyProps}
          firstPageRows={firstPageRows}
          prepareRow={prepareRow}
        /> : <>Loading ...</>}
    </div>
  )
}

export default AppTable