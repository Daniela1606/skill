/* import { Layout } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content, Header } from "antd/es/layout/layout"
import NavMenu, { getItem } from "../components/NavMenu";
import { NavLink } from "react-router-dom";
import { imagenL, imagenLi, imagenF, imagenI, imagenLo, imagenLoo } from '../constante/imagen';
import Appsearch from "../search";


const items = [
    getItem('Search', 'users', <NavLink key="users" to='/search' /> ),
    getItem('Help', 'users', <NavLink key="users" to='/help' /> ),
    getItem('Contact', 'users', <NavLink key="users" to='/contact' /> ),
    getItem('Settings', 'users', <NavLink key="users" to='/settings' /> )
]

const MenuLogin = ()=> {

    return (

        <Layout style={{maxHeight: '100vh'}}>
            <Sider>
                <div>
            <img src={imagenLo.IMAGENICON} alt="Logo" />
            </div>

               <NavMenu items={items} style={{height: '100%'}} />
            </Sider>
            <Layout style={{overflowY: 'scroll'}}>
                <Content style={{marginTop: '2em'}}>
                Welcome, Kevin!
                <p>Improve your profile by completing the skills section</p>
                <Appsearch/>
                </Content>
            </Layout>
        </Layout>
    )
}


export default MenuLogin */

import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { imagenL, imagenLi, imagenF, imagenI, imagenLo, imagenLoo } from '../constante/imagen';
import Appsearch from "../search";


const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
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
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}

      >

<img src={imagenLo.IMAGENICON} alt="Logo" />

        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
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
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
{/*           <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
                <p style={{fontSize:'40px', fontWeigth:'700', colo:'black'}}>Welcome, Kevin!</p>
                <p>Improve your profile by completing the skills section</p>
                <Appsearch/>          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MenuLogin;