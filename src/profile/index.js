import React, { useEffect } from 'react';
import { Badge, Descriptions } from 'antd';
import { useParams } from 'react-router-dom';

const AppProfile = () => {
  const { data } = useParams();

  useEffect(() => {
    console.log('El componente se ha montado');
    profile()
  }, []); //

  const profile = () => {

fetch(`http://18.169.192.176/api/users/employees/${data}`, {
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
    // Realiza alguna acción con los datos recibidos
  })
  .catch(error => {
    console.error(error);
  });

  }


return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ width: '1000px', }}>
      <Descriptions title="User Info" layout="vertical" bordered items={items} />
    </div>
  </div>
)
}

const items = [
  {
    key: '1',
    label: 'Name',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Last Name',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Phone',
    children: 'YES',
  },

  {
    key: '4',
    label: 'Email',
    children: '2018-04-24 18:00:00',
  },
  {
    key: '5',
    label: 'Birthday',

    children: '2019-04-24 18:00:00',
  },
  {
    key: '6',
    label: 'Roles',
    span: 3,
    children: <Badge status="processing" text="Running" />,
  },
  {
    key: '7',
    label: 'Address',
    children: '$80.00',
  },
  {
    key: '8',
    label: 'Postcode',
    children: '$20.00',
  },
  {
    key: '9',
    label: 'Official Receipts',
    children: '$60.00',
  },
];

export default AppProfile;