import { useEffect, useState } from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter
} from 'react-table';

import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

const AppTable = () => {
  const [data, setData] = useState([]);

  const columns = [
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
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
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
    fetch('../../assets/mock/users.json')
      .then(response => response.json())
      .then((json) => setData(json))
 }, []);

  return (
    <div className="app-table">
      <TableHeader
        getTableProps={getTableProps}
        headerGroups={headerGroups}
      />
      <TableBody
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        firstPageRows={firstPageRows}
        prepareRow={firstPageRows}
      />
    </div>
  )
}

export default AppTable