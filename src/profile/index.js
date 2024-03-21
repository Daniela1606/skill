import React, { useEffect, useState } from 'react';
import { Badge, Descriptions } from 'antd';
import { useParams } from 'react-router-dom';

const AppProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null); 

  useEffect(() => {
    console.log('El componente se ha montado');
    profile();
  }, []);

  const profile = () => {
    fetch(`http://18.169.192.176/api/users/employees/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(data => {
        console.log(data);
        setUserData(data); 
      })
      .catch(error => {
        console.error(error);
      });
  };

 
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '1000px' }}>
        {userData && (
          <Descriptions title="User Info" layout="vertical" bordered items={generateItems(userData)} />
        )}
      </div>
    </div>
  );
};

const generateItems = userData => {
  return [
    {
      key: '1',
      label: 'First Name',
      children: userData.user.firstName,
    },
    {
      key: '2',
      label: 'Last Name',
      children: userData.user.lastName,
    },
    {
      key: '3',
      label: 'Title',
      children: userData.user.title,
    },
    {
      key: '4',
      label: 'Job Title',
      children: userData.user.jobTitle,
    },

    {
      key: '5',
      label: 'Preferred name',
      children: userData.user.preferredName,
    },
    {
      key: '6',
      label: 'Email',
      children: userData.user.email,
    },
    {
      key: '7',
      label: 'Birthday',
      children: userData.user.departament,
    },
    {
      key: '8',
      label: 'Division',
      span: 3,
      children: userData.user.division,
    },
    {
      key: '9',
      label: 'Location',
      children: userData.user.address.location_address,
    },

  ];
};

export default AppProfile;