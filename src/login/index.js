import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Layout, Row } from 'antd';
import { imagenL, imagenLi, imagenF, imagenI, imagenLo, imagenLoo } from '../constante/imagen';
import { useNavigate } from 'react-router-dom';
import AppMenu from '../menuLogin/index';


const AppLogin = () => {
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const login = () => {
    setError(null);
  
    if (!inputValue || !passwordValue) {
      setError('Please enter your email and password.');
      return;
    }
  
    if (!isValidEmail(inputValue)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    const values = {
      email: inputValue,
      password: passwordValue
    };
  
    fetch('http://18.169.192.176/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
  
        localStorage.setItem('token', data.token);
        localStorage.setItem('status', data.user_status);
  
        navigate('/menu/' + encodeURIComponent(data.id));
      })
      .catch(error => {
        setError('Please enter a valid  password.');
        console.error(error);
      });
  };

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            return navigate('/')
        }

    }, [navigate]);

  return (
    <Layout>
      <Row style={{
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}>

        <Col
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '1em auto 0',
            alignItems: 'flex-start',
            minHeight: '90vh',
            background:'white',
          }}
        >
          <div style={{ width: '100%', maxWidth: '496px', margin: '0 0.5em', }}>
          <img src={imagenLo.IMAGENICON} alt="Logo" style={{marginBottom: '5rem'}} />
          <p
            style={{
              fontSize: '48px',
              fontWeight: '800',
              marginBottom: '30px',
            }}
          >
            Welcome to Skillsat!
          </p>
          <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '300',
                        maxWidth: '90%',
                        color: '#757095',
                        lineHeight:'2rem',
                        marginBottom: '3rem'
                      }}
          
          >

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

          </p>


          <Form
            name="normal_login"
            className="login-form"
            style={{
              width: '100%',
            }}
            initialValues={{
              remember: true
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!'
                }
              ]}
            >
              <Input className='borde'
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]}
            >
              <Input className='borde'
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{color:'#757095'}}>Remember me</Checkbox>
              </Form.Item>

              <a style={{marginLeft:'45%'}} className="login-form-forgot" href="">
                Forgot password?
              </a>
            </Form.Item>

            <Form.Item>
            {error && <p style={{ color: 'red' }}>{error}</p>}

              <Button
                style={{
                  width: '100%',
                  padding: '20px 0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#041F72',
                  fontWeight: '600',
                  borderRadius: '10px',
                }}
                type="primary"
                htmlType="submit"
                onClick={login}
              >
                Log in
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                style={{
                  width: '100%',
                  padding: '20px 0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#1677ff00',
                  border: 'solid 2px #041F72 ',
                  color: '#041F72',
                  fontWeight: '600',
                  borderRadius: '10px',
                }}
                type="primary"
                htmlType="submit"
              >
                Log in with SSO
              </Button>
            </Form.Item>
          </Form>
          </div>
        </Col>

        <Col md={10}>
          <div className="image-back"></div>
          <Col>
  <Row>
    <Col>
      <AppMenu />
    </Col>
    <Col style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: '30%', marginTop:'1rem' }}>
      <div>
        <img
          src={imagenI.IMAGENICON}
          alt="Logo"
          style={{ width: '25px', height: '25px', marginRight:'0.5rem' }}
        />
      </div>
      <div>
        <img
          src={imagenF.IMAGENICON}
          alt="Logo"
          style={{ width: '25px', height: '25px', marginRight:'0.5rem'  }}
        />
      </div>
      <div>
        <img
          src={imagenLi.IMAGENICON}
          alt="Logo"
          style={{ width: '25px', height: '25px' }}
        />
      </div>
    </Col>
  </Row>
</Col>   
        </Col>

        
    

        
      </Row>
    </Layout>
  );
};

export default AppLogin;

