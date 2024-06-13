/*  import React, { useState } from 'react';
import { Input } from 'antd';

const AppsearchTarget = ({inputValue, onInputChange }) => {

  return <Input className='pruebita' value={inputValue} onChange={onInputChange} />;
};

export default AppsearchTarget;  */


import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

const AppsearchTarget = ({ inputValue, onInputChange }) => {
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch('/api/skills/suggestions/?itemsPerPage=10&currentPage=1&search=HTML&category=skill');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <Input
      className="pruebita"
      value={inputValue}
      onChange={onInputChange}
    />
  );
};

export default AppsearchTarget;



