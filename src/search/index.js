import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Appsearch = () => (
  <Space direction="vertical" style={{width: '100%'}}>
    <Search
      placeholder="Search Skills, Vendors, Hobbies"
      onSearch={onSearch}
    />


  </Space>
);
export default Appsearch;