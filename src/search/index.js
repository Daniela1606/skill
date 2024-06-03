import React, { useState } from 'react';
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

const Appsearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Space direction="vertical" style={{ width: '60%' }}>
      <Search
        placeholder="Search Skills, Vendors, Hobbies"
        onSearch={handleSearch}
      />
    </Space>
  );
};

export default Appsearch;