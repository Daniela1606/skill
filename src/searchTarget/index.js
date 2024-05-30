import React, { useState } from 'react';
import { Input } from 'antd';

const AppsearchTarget = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue); 
  };

  return <Input className='pruebita' value={inputValue} onChange={handleInputChange} />;
};

export default AppsearchTarget;