import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    InputNumber,
    Select
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import './styles.css'

const VerifyForm = ({ initialValues, onFormInstanceReady }) => {
    const [form] = useForm()

    useEffect(() => {
        onFormInstanceReady(form)
    }, [])

    useEffect(() => {
        form.setFieldsValue(initialValues)
    }, [initialValues])

    useEffect(() => {
        console.log({form: form.getFieldsValue()})
    })

    console.log({form: form.getFieldsValue()})
    return (

    <Form
        id='form'
        layout='vertical'
        disabled={true}
        form={form}
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'

        }}
        variant="filled"
        className='form'
    >
      <Form.Item
          label="First Name"
          initialValue={'hola'}
          name="firstName"
          rules={[
            {
            //   required: true,
              message: 'Please enter your First Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          label="Last Name"
          name="lastName"
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
          label="Preferred Name"
          name="preferredName"
          rules={[
            {
              required: false,
              message: 'Please enter your preferred Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
            label="Job Title"
            name="job_title"
            rules={[
              {
                required: true,
                message: 'Please Job Title!',
              },
            ]}
          >
            <Input />
        </Form.Item>
        <Form.Item
            label="Department"
            name="department"
            rules={[
              {
                required: true,
                message: 'Please Department!',
              },
            ]}
          >
            <Input 
            />
        </Form.Item>
        
        <Form.Item
              label="Division"
              name="division"
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
            label="Phone"
            name="phonenumber"
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
      label="Gender"
      name="gender"
      rules={[
        {
          required: true,
          message: 'Please input Gender!',
        },
      ]}
    >
      <Select
        options={[
          {label: 'Male', value: 'M'},
          {label: 'Female', value: 'F'}
        ]}
      />
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
      <Input />
    </Form.Item>
    <Form.Item
            label="Country"
            name="country"
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
            label="Address"
            name="location_address"
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
      </Form>



    );
};

export default VerifyForm;