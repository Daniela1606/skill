import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Layout, Row } from 'antd';
import { imagenL, imagenLi, imagenF, imagenI } from '../constante/imagen';
import { useNavigate } from 'react-router-dom';

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

  const login = () => {
    console.log(inputValue);
    console.log(passwordValue);
    const values = {
      email: inputValue,
      password: passwordValue
    };
    console.log(values);

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
        console.log('data', data);

   
        localStorage.setItem('token', data.token);
        localStorage.setItem('status', data.user_status);

        if(data.user_status === 'Pending') {
          navigate('/verify-user/' + encodeURIComponent(data.id));
        } else {
          navigate('/');
        }
      })
      .catch(error => {
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
      <Row>
        <Col md={6}></Col>
        <Col
          md={8}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '95vh'
          }}
        >
          <p
            style={{
              fontFamily: 'Manrope',
              fontSize: '50px',
              textAlign: 'center',
              fontWeight: '500'
            }}
          >
            Welcome at Skillsat!
          </p>

          <Form
            name="normal_login"
            className="login-form"
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
              <Input
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
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                style={{
                  width: '20rem',
                  background: '#03033e',
                  fontWeight: '600'
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
                  width: '20rem',
                  background: '#1677ff00',
                  border: 'solid 2px #03033e ',
                  color: '#03033e',
                  fontWeight: '600'
                }}
                type="primary"
                htmlType="submit"
              >
                Log in with SSO
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col md={10}>
          <div className="image-back"></div>
        </Col>
      </Row>
    </Layout>
  );
};

export default AppLogin;

