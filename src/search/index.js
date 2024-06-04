<<<<<<< HEAD
import React, { useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
=======
import React, { useEffect, useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import CardArray from '../cardSkill';
import { imagenDeIcon, imagenDeGit, imagenDeAtom, imagenDeJs, imagenDePhy, imagenDeC, imagenDeMy, imagenAws, imagenSsl, imagenApache, imagenDeResearch, imagenDeWordpress } from '../constante/imagen';
>>>>>>> 259a04d28de0a48da15ffdc7f984f325697116b9

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
<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Space direction="vertical" style={{ width: '60%' }}>
      <Search
=======
  const [searchData, setSearchData] = useState(null);

  const handleSearch = (value) => {
    console.log(value);
    const token = localStorage.getItem('token');

    fetch(`http://3.8.157.187/api/skills/?itemsPerPage=10&currentPage=1&search=${value}`, {
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
>>>>>>> 259a04d28de0a48da15ffdc7f984f325697116b9
        placeholder="Search Skills, Vendors, Hobbies"
        onSearch={handleSearch}
      />
    </Space>
  );
};

export default Appsearch;