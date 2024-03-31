import React, { useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { imagenLo, imagenLogoAzul, imagenBuscar, imagenEmpleo, imagenProbando } from '../constante/imagen';
import Appsearch from "../search";

const { Header, Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});



const MenuLogin = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const [employee, setEmployee] = useState(null);

  useEffect(() => {
 
    const fetchEmployee = async () => {
      try {
        const response = await fetch('Api/users/employees/id'); 
        if (response.ok) {
          const data = await response.json();
          setEmployee(data);
        } else {
          console.error('Error al llamar al endpoint:', response.statusText);
        }
      } catch (error) {
        console.error('Error al llamar al endpoint:', error);
      }
    };

    fetchEmployee();
  }, []);
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={imagenLo.IMAGENICON} alt="Logo" />
        </div>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout style={{ flex: 1 }}>
          <Layout style={{ flex: 1 }}>

            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div>
              <p style={{ fontSize: '40px', fontWeight: '700', color: 'black' }}>
                Welcome, {employee.name}</p>
                <p>Improve your profile by completing the skills section</p>
              </div>
              <img src={imagenLogoAzul.IMAGENICON} alt="Logo" style={{ marginLeft: 'auto', width: '20%' }} />
            </Content>


            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div>
                <p style={{ fontSize: '20px', fontWeight: '700', color: 'black' }}>
                  Find your skill
                </p>
                <Appsearch />
              </div>
              <img src={imagenBuscar.IMAGENICON} alt="Logo" style={{ marginLeft: 'auto', width: '20%' }} />
            </Content>

            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div>
                <img src={imagenProbando.IMAGENICON} alt="Logo" style={{ marginLeft: '-5rem', width: '100%' }} />
              </div>
              <img src={imagenEmpleo.IMAGENICON} alt="Logo" style={{ marginLeft: 'auto', width: '15%' }} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MenuLogin;