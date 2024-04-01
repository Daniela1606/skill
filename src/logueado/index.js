import React, { useContext, useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';

import { Breadcrumb, Layout, Menu, Modal, message, theme } from 'antd';
import { imagenLo, imagenLogoAzul, imagenBuscar, imagenEmpleo, imagenProbando, imagenDeFooter } from '../constante/imagen';
import Appsearch from "../search";
import AppRegister from '../register';
import VerifyForm from '../components/VerifyForm';

const { Header, Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  let menuLabel = '';


  switch (index) {
    case 0:
      menuLabel = 'Search';
      break;
    case 1:
      menuLabel = 'Help';
      break;
    case 2:
      menuLabel = 'Contact';
      break;
    case 3:
      menuLabel = 'Settings';
      break;
    case 4:
      menuLabel = 'Option 4';
      break;
    case 5:
      menuLabel = 'Option 5';
      break;
    case 6:
      menuLabel = '';
      break;
    default:
      menuLabel = 'Default Option';
  }

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: menuLabel,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `Option ${subKey}`,
      };
    }),
  };
});


const MenuLogin = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { id } = useParams();

  const [status] = useState(localStorage.getItem('status'))



  const [employee, setEmployee] = useState(null);
  const [verifyOpen, setVerifyOpen] = useState(null);
  const {messageApi, contextHolder } = message.useMessage()
  const [validateFormInstance, setValidateFormInstance] = useState(null);

  useEffect(() => {
 
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://18.169.192.176/Api/users/employees/${id}`); 
        if (response.ok) {
          const data = await response.json();
          console.log({data})
          console.log('get Dataaaaaaaaaaaaaaaaaaaaaaaaaaa')
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


  useEffect(() => {
    if (status === 'Pending') {
      setVerifyOpen(true);
    }
  }, [status])

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
          width={400}
          style={{
            background: colorBgContainer,
            border:'solid 1px #EFEEFC',
            borderRadius:'10px',
            margin:'20px 20px 20px 20px'
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
                margin: '0px 10px 0px 10px',
                maxHeight: 200,
                background: colorBgContainer,
                borderRadius:'20px',
                display: 'flex',
                alignItems: 'center',
                border:'solid 1px #EFEEFC',
                marginTop:'-2rem'
              
              }}
            >
              <div>
              <p style={{ fontSize: '40px', fontWeight: '700', color: 'black' }}>
              Welcome, {employee ? employee.user.firstName : ''}</p>
                <p>Improve your profile by completing the skills section</p>
              </div>
              <img src={imagenLogoAzul.IMAGENICON} alt="Logo" style={{ marginLeft: 'auto', width: '20%' }} />
            </Content>


            <Content
              style={{
                padding: 24,
                margin: '10px 10px 0px 10px',
                maxHeight:200,
                display: 'flex',
                alignItems: 'center',
                background:'#ffffffb5'
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
                maxHeight:400,
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


            <Content
              style={{
                padding: 24,
                margin: 0,
                maxHeight:60,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                display: 'flex',
                alignItems: 'center',
              }}
            >

<div style={{ background: 'linear-gradient(to bottom, #AFDFBB, #58C2C0)', width: '50%', borderRadius: '20px', padding: '10px' }}>
  <p>Need a hand?</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <button style={{ background: 'white', border: 'solid 1px white', width: '20%', borderRadius: '20px', padding: '5px' }}>Submit</button>

    <p style={{color:'white'}}>Next Question → </p>
  </div>
</div>
{/*               <div>
              <img src={imagenDeFooter.IMAGENICON} alt="Logo" style={{ marginLeft: '-5rem', width: '100%' }} />
              </div> */}

            </Content>


          {contextHolder}
          <Modal
                width={840}
                open={verifyOpen}
                title="Create a new user"
                okText="Create"
                cancelText="Cancel"
                okButtonProps={{
                  autoFocus: true,
                }}
                onCancel={() => setVerifyOpen(false)}
                destroyOnClose
                onOk={async () => {
                  let values
                  try {
                    values = await validateFormInstance?.validateFields();
                  } catch (error) {
                    console.log('Failed:', error);
                    messageApi.open({type: 'error', content: 'Invalid field. Please try again.'})
                  }
                    if(values) {
                      try {
                        // await register(values)
                        messageApi.open({type: 'error', content: 'User created successfully'})
                        validateFormInstance?.resetFields();
                        // onCreate(values);
                      } catch (error) {
                        messageApi.open({type: 'error', content: error.toString()})
                      }
                        
                      }
                    }}
              >
                <VerifyForm
                  initialValues={employee}
                  onFormInstanceReady={(instance) => {
                    setValidateFormInstance(instance);
                  }}
                />
              </Modal>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MenuLogin;