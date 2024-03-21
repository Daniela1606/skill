import React, { useEffect, useState } from 'react';
import { Badge, Descriptions, Button, Modal } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';

const AppProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('El componente se ha montado');
    profile();
  }, []);

  const profile = () => {
    const token = localStorage.getItem('token'); 

    fetch(`http://18.169.192.176/api/users/employees/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
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
    setConfirmModalVisible(true);
  };

  const handleConfirm = () => {
    setConfirmModalVisible(false);

    const token = localStorage.getItem('token'); 

    fetch('http://18.169.192.176/api/users/employees/verify-correct-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify({ id: userData.user.id })
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
     
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    setConfirmModalVisible(false);
  };

  const handleButton2Click = () => {
    console.log('boton2');
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
      // Descomenta este bloque si deseas mostrar Preferred name
      // {
      //   key: '5',
      //   label: 'Preferred name',
      //   children: userData.preferredName,
      // },
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
      {
        key: '10',
        label: 'Country',
        children: userData.user.address.country,
      },
      {
        key: '11',
        label: 'City',
        children: userData.user.address.city,
      },
    ];
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '1000px' }}>
        {userData && (
          <>
            <Descriptions title="User Info" layout="vertical" bordered items={generateItems(userData)} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button type="primary" onClick={handleButton1Click} style={{ marginRight: '10px', background:'rgb(3, 3, 62)',color: 'white' }}>
                Confirmar
              </Button>
              <Button type="primary" onClick={handleButton2Click} style={
{ marginRight: '10px', background:'rgb(3, 3, 62)',color: 'white' }}>
                Invalid Data
              </Button>
            </div>
          </>
        )}
      </div>
      <Modal
        title="Confirmar"
        visible={confirmModalVisible}
        onOk={handleConfirm}
        onCancel={handleCancel}
        okText="Confirmar"
        cancelText="Cancelar"
      >
        <p>¿Estás seguro de confirmar los datos?</p>
      </Modal>
    </div>
  );
};

export default AppProfile;