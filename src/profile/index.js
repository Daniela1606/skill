import React, { useEffect, useState } from 'react';
import { Badge, Descriptions, Button } from 'antd';
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

  const handleButton1Click = () => {
   
    console.log('boton1');
  };

  const handleButton2Click = () => {

    console.log('boton2');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '1000px' }}>
        {userData && (
          <>
            <Descriptions title="User Info" layout="vertical" bordered items={generateItems(userData)} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button type="primary" onClick={handleButton1Click} style={{ marginRight: '10px', background:'rgb(3, 3, 62)',color: 'white' }}>
                Confirm
              </Button>
              <Button type="primary" onClick={handleButton2Click} style={{background:'rgb(3, 3, 62)',color: 'white' }}>
              Invalid Data

              </Button>
            </div>
          </>
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
      children: userData.title,
    },
    {
      key: '4',
      label: 'Job Title',
      children: userData.job_title,
    },
/*     {
      key: '5',
      label: 'Preferred name',
      children: userData.preferredName,
    }, */
    {
      key: '6',
      label: 'Email',
      children: userData.user.email,
    },
    {
      key: '7',
      label: 'Department',
      children: userData.department,
    },
    {
      key: '8',
      label: 'Division',
      children: userData.division,
    },
    {
      key: '9',
      label: 'Location',
      children: userData.user.address.location_address,
    },
  ];
};

export default AppProfile;