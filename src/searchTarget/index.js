import React, { useState } from 'react';
import { Input } from 'antd';

const AppsearchTarget = ({inputValue, onInputChange }) => {

  return <Input className='pruebita' value={inputValue} onChange={onInputChange} />;
};

export default AppsearchTarget;