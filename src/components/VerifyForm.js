import { LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Col,
    Layout,
    Row
} from 'antd';
import { useForm } from 'antd/es/form/Form';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};



const VerifyForm = ({ initialValues, onFormInstanceReady }) => {
    const navigate = useNavigate();
    const [form] = useForm()

    useEffect(() => {
        onFormInstanceReady(form)
    }, [])

    const register = (values) => {
        const data = {
            firstName: values.firstNameValue,
            lastName: values.lastNameValue,
            phonenumber: values.phoneValue,
            gender: values.genderValue,
            email: values.emailValue,
            password: values.passwordValue,
            bithday: values.birthdayValue,
            //roles: passwordValue,
            address: {
                location_address: values.addressValue,
                city: values.cityValue,
                postcode: values.postCodeValue,
                country: values.countryValue,
            },
            title: values.tittleValue,
            job_title: values.jobValue,
            department: values.departamentValue,
            division: values.divisionValue

        };
        console.log(values)
        // Make a request to the login endpoint
        fetch('http://18.169.192.176/api/users/employees', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                response.json()
                console.log(response.status);
                if (response.status == '400') navigate('/menu');
            })
            .then(data => {

                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    };


    console.log({ initialValues })

    return (
        <Layout>
            <Row style={{ backgroud: 'white' }}>

                <Col style={{ background: 'white' }} md={8}>

                    {/* Primeros 8 inputs */}

                    <Form
                        {...formItemLayout}
                        form={form}
                        variant="filled"
                        initialValues={initialValues}
                        style={{
                            maxWidth: 600,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: "95vh"
                        }}
                    >


                        <Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your First Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Phone Number!',
                                },
                            ]}
                        >
                            <InputNumber
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Birthday"
                            name="birthday"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please birthday!',
                                },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            label="Postcode"
                            name="postcode"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Postcode!',
                                },
                            ]}
                        >
                            <InputNumber
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            label="City"
                            name="city"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please City!',
                                },
                            ]}
                        >
                            <Input
                            />
                        </Form.Item>

                        <Form.Item
                            label="Departament"
                            name="departament"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Departament!',
                                },
                            ]}
                        >
                            <Input
                            />
                        </Form.Item>

                    </Form>
                </Col>

                <Col style={{ background: 'white' }} md={8}>
                    {/* Últimos 8 inputs AQUII */}


                    <Form
                        {...formItemLayout}
                        variant="filled"
                        style={{
                            maxWidth: 600,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: "95vh"
                        }}
                    >
                        <Form.Item
                            label="Last Name"
                            name="last Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your Last Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Gender"
                            name="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Gender.!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Address"
                            name="Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Address!',
                                },
                            ]}
                        >
                            <Input
                            />
                        </Form.Item>
                        <Form.Item
                            label="Country"
                            name="Country"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Country!',
                                },
                            ]}
                        >
                            <Input
                            />
                        </Form.Item>
                        <Form.Item
                            label="Title"
                            name="Title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Job Title!',
                                },
                            ]}
                        >
                            <Input
                            />
                        </Form.Item>
                        <Form.Item
                            label="Division"
                            name="Division"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Division!',
                                },
                            ]}
                        >
                            <Input
                            />
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <Button
                                style={{
                                    width: "20rem",
                                    background: "rgb(4, 31, 114)",
                                    fontWeight: "600"
                                }}
                                type="primary"
                                htmlType="submit"
                                onClick={register}
                            >
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>

                <Col md={8}>
                    <div className='image-back'>
                        {/* Imagen */}
                        {/* <img style={{  width: "500px", paddingTop: '100px', height: "700px"  }} src={imagenL.IMAGENICON} /> */}
                    </div>
                </Col>
            </Row>
        </Layout>



    );
};

export default VerifyForm;