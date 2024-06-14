

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

const Appsearch = ({ onSearch }) => {
  const [searchData, setSearchData] = useState(null);

  const handleSearch = (value) => {
    console.log(value);
    const token = localStorage.getItem('token');

    fetch(`http://3.8.157.187/api/skills/?itemsPerPage=10&currentPage=1&search=${value}&category=Skill`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })    
      .then(response => response.json())
      .then(data => {
        console.log({data});
        const cardData = [
          { title: 'GitHub ', image: imagenDeGit.IMAGENICON },
          { title: 'JavaScript ', image: imagenDeJs.IMAGENICON },
          { title: 'Phyton ', image: imagenDePhy.IMAGENICON },
        ]; 
        const cards = data.skills? data?.skills?.map(item => ({id: item.id, title: item.name, image: item.image })) : [];
        onSearch(cards);
        setSearchData(cards);
      })
      .catch(error => {
        console.error(error);
      });
  };

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