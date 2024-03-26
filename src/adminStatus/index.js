import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const AppStatus = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users/?itemsPerPage=3&currentPage=4');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return <Table style={{ display:"flex", justifyContent:"center", alignItems:"center"}} columns={columns} dataSource={data} onChange={onChange} />;
};

export default AppStatus;

