

import React, { useEffect, useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import CardArray from '../cardSkill';
import { imagenDeIcon, imagenDeGit, imagenDeAtom, imagenDeJs, imagenDePhy, imagenDeC, imagenDeMy, imagenAws, imagenSsl, imagenApache, imagenDeResearch, imagenDeWordpress } from '../constante/imagen';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
      padding:'2rem'
    }}
  />
);

const Appsearch = ({ onSearch, handleSearch }) => {
  const [searchData, setSearchData] = useState(null);


  useEffect(() => {
    handleSearch('')
  }, []);

  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Search 
        placeholder="Search Skills, Vendors, Hobbies"
        onSearch={handleSearch}
      />
    </Space>
  );
};

export default Appsearch;