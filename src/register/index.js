import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { imagenL, imagenLi, imagenF, imagenI } from '../constante/imagen'; 
import { useNavigate } from 'react-router-dom';
import React, {useState}  from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  Checkbox,
  Col,
  Layout, 
  Row
} from 'antd';

const { RangePicker } = DatePicker;
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



const AppRegister = () => {
  const navigate = useNavigate();

  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [birthdayValue, setBirthdayValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [postCodeValue, setPostCodeValue] = useState('');
  const [departamentValue, setDepartamentValue] = useState('');
  const [divisionValue, setDivisionValue] = useState('');
  const [tittleValue, setTittleValue] = useState('');
  const [jobValue, setJobValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [cityValue, setCityValue] = useState('');



  const handleFirstNameChange = (event) => {
    setFirstNameValue(event.target.value);
  };


  const handleLastNameChange = (event) => {
    setLastNameValue(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGenderValue(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthdayValue(event.target.value);
  };


  const handleAddressChange = (event) => {
    setAddressValue(event.target.value);
  };

  const handlePostCodeChange = (event) => {
    setPostCodeValue(event.target.value);
  };

  const handleDepartamentChange = (event) => {
    setDepartamentValue(event.target.value);
  };

  const handleDivisionChange = (event) => {
    setDivisionValue(event.target.value);
  };

  const handleTittleChange = (event) => {
    setTittleValue(event.target.value);
  };

  const handleJobChange = (event) => {
    setJobValue(event.target.value);
  };


  const handleCountryChange = (event) => {
    setCountryValue(event.target.value);
  };

  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };

  const register = () => {
    console.log(passwordValue)
    const values = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      phonenumber: phoneValue,
      gender: genderValue,
      email: emailValue,
      password: passwordValue,
      bithday: birthdayValue,
      //roles: passwordValue,
      address: {
        location_address: addressValue,
        city: cityValue ,
        postcode: postCodeValue,
        country: countryValue,
      },
      title: tittleValue,
      job_title: jobValue,
      department: departamentValue,
      division: divisionValue

    };
    console.log(values)
    // Make a request to the login endpoint
    fetch('http://18.169.192.176/api/users/employees', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {response.json()
      console.log(response.status);
      if (response.status == '400') navigate('/profile');        
    })
      .then(data => {
        // Handle the response from the server
        // Verifica si todos los campos están llenos
   /*  if (
      values['First Name'] &&
      values['Last Name'] &&
      values['Phone'] &&
      values['Email'] &&
      values['password'] &&
      values['Birthday'] &&
      values['Roles'] &&
      values['Address'] &&
      values['Postcode'] &&
      values['Departament'] &&
      values['Division']
    ) {
      // Redirige a la vista "/dashboard"
      navigate('/profile');
    } else {
      // Campos incompletos, no se realiza la redirección
      console.log('Fields are incomplete',data);
    } */
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Verifica si todos los campos están llenos
    if (
      values['First Name'] &&
      values['Last Name'] &&
      values['Phone'] &&
      values['Email'] &&
      values['password'] &&
      values['Birthday'] &&
      values['Roles'] &&
      values['Address'] &&
      values['Postcode'] &&
      values['Departament'] &&
      values['Division']
    ) {
      // Redirige a la vista "/dashboard"
      navigate('/profile');
    } else {
      // Campos incompletos, no se realiza la redirección
      console.log('Fields are incomplete');
    }
  };


  return (
    <Layout >
      <Row >
        <Col   md={6}></Col>
        <Col   md={8} 
        style={{ 
        
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center', 
           minHeight: "95vh" }}>
         
          <p style={{ 
          fontFamily: "Manrope", 
          fontSize: "50px", 
          textAlign: "center",
          fontWeight:"500" }}>
          Register!</p>

          <Form
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="First Name"
      name="First Name"
      rules={[
        {
          required: true,
          message: 'Please First Name!',
        },
      ]}
      onChange={handleFirstNameChange}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Last Name"
      name="Last Name"
      rules={[
        {
          required: true,
          message: 'Please Last Name!',
        },
      ]}
      onChange={handleLastNameChange}
      >
      <Input />
    </Form.Item>

    <Form.Item
      label="Phone"
      name="Phone"
      rules={[
        {
          required: true,
          message: 'Please Phone Number!',
        },
      ]}
      onChange={handlePhoneChange}
    >
      <InputNumber
        style={{
          width: '100%',
        }}
      />
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
      onChange={handleGenderChange}
      >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          required: true,
          message: 'Please Email!',
        },
      ]}
      onChange={handleEmailChange}
    >
      <Input />
    </Form.Item>

    <Form.Item
            label = "Password"
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
                onChange={handlePasswordChange}
              />
            </Form.Item>

    <Form.Item
      label="Birthday"
      name="Birthday"
      rules={[
        {
          required: true,
          message: 'Please birthday!',
        },
      ]}
      onChange={handleBirthdayChange}
    >
      <DatePicker />
    </Form.Item>

{/*     <Form.Item
      label="Roles"
      name="Roles"
      rules={[
        {
          required: true,
          message: 'Please role!',
        },
      ]}
    >
      <Select />
    </Form.Item> */}

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
       onChange={handleAddressChange}
      />
    </Form.Item>

    <Form.Item
      label="Postcode"
      name="Postcode"
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
        onPressEnter={handlePostCodeChange}
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
       onChange={handleCountryChange}
      />
    </Form.Item>


    <Form.Item
      label="City"
      name="City"
      rules={[
        {
          required: true,
          message: 'Please City!',
        },
      ]}
    >
      <Input 
       onChange={handleCityChange}
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
       onChange={handleTittleChange}
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
       onChange={handleTittleChange}
      />
    </Form.Item>

    <Form.Item
      label="Job Tittle"
      name="Job Title"
      rules={[
        {
          required: true,
          message: 'Please Job Title!',
        },
      ]}
    >
      <Input 
       onChange={handleJobChange}
      />
    </Form.Item>


    <Form.Item
      label="Departament"
      name="Departament"
      rules={[
        {
          required: true,
          message: 'Please Departament!',
        },
      ]}
    >
      <Input 
       onChange={handleDepartamentChange}
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
       onChange={handleDivisionChange}
      />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Button style={{ 
              width: "20rem", 
              background: "#03033e", 
              fontWeight: "600" }} type="primary" htmlType="submit"
              onClick={register}
              >
        Register
      </Button>
    </Form.Item>
  </Form>
        </Col>

        {/* style={{ textAlign: 'center', maxHeight: '100px'}} */}
        <Col   md={10}  >
          <div className='image-back'>
          
          {/* <img style={{  width: "500px", paddingTop: '100px', height: "700px"  }} src={imagenL.IMAGENICON} /> */}
          </div>
        </Col>

      </Row>

    </Layout>



  );
};

export default AppRegister;