import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, SearchOutlined, InfoCircleOutlined, HeatMapOutlined,PhoneOutlined } from '@ant-design/icons';
import { Menu, Row, Col, Button } from 'antd';
import { imagenBuss1, imagenBuss2, imagenTopBar, imagenDeAvatar, imagenDeMagic } from '../constante/imagen';
import { useParams } from 'react-router-dom';
import AppPopup from '../Popup/index';


const items = [
  {
    key: 'g2',
    label: 'GENERAL',
    type: 'group',
  },
  {
    icon: <SearchOutlined />,
  },
  {
    key: 'g3',
    label: 'GROUP',
    type: 'group',
  },
  {
    icon: <InfoCircleOutlined />,
  },
  {
    icon: <MailOutlined />,
  },
  {
    icon: <SettingOutlined />,
  },
];

const AppProfileUser = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  const { id } = useParams();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSkills , setSelectedSkills] = useState([]);


  const [employee, setEmployee] = useState(null);

  function handleRateSkill(idx, value) {
    setSelectedSkills(selectedSkills.map((skill, index) => index === idx ? { ...skill, rate: value} : skill));
  }

  const handleSkillDelete = (skillId) => {
    setSelectedSkills(prevSkills => prevSkills.filter(skill => skill.id !== skillId));
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://3.8.157.187/Api/users/employees/${id}`);
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
    <Row>
      <Col span={2}>
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </Col>
      <Col span={22}>
        <div style={{ width: '100%', height: '200px', position: 'relative' }}>
          <img
            src={imagenTopBar.IMAGENICON}
            alt="Logo"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <Col span={6}>
    <img src={imagenDeAvatar.IMAGENICON} alt="Logo" style={{ width: '150%' }} />
  </Col>
  <Col span={8}>
    <p style={{ marginLeft: '5rem' }}>{employee ? employee.user.firstName : ''}</p>
  </Col>
  <Col span={10} style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Button type="primary" style={{ marginRight: '1rem', background:'#041F72', paddingRight:'1.2rem', paddingLeft:'1.2rem' }}>Follow</Button>
    <Button type="default" style={{border:'solid 2px #041F72'}}>Contact</Button>
  </Col>
</div>
          <div style={{lineHeight:'2rem', marginRight:'2rem'}}>
              <div style={{display:'flex', alignItems:'center'}}>
              <HeatMapOutlined />
               <span style={{marginLeft:'0.5rem'}}>Bristol, England</span>
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
              <MailOutlined />
              <span style={{marginLeft:'0.5rem'}}>name.cross@companyname.com</span>
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
              <PhoneOutlined />                
              <span style={{marginLeft:'0.5rem'}}>+123456789</span>
              </div>
        </div>
        </div>

        <Row style={{ marginTop: '6rem' }}>
          <Col span={12}>
            <div className="text-user-box">
              <div className="text-user">
                <p style={{ color: 'black', fontWeight: '700', fontSize: '20px' }}>About me</p>
                <p style={{ textAlign: 'left' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <div className="text-user">
                <p style={{ color: 'black', fontWeight: '700', fontSize: '20px' }}>Role</p>
                <div style={{ display: 'flex' }}>
                  <div style={{ display: 'flex', flex: '1', alignItems: 'center' }}>
                    <img src={imagenBuss1.IMAGENICON} alt="Logo" style={{ marginRight: '1rem' }} />
                    <div style={{ textAlign: 'left' }}>
                      <p style={{ color: 'black', fontSize: '18px', fontWeight: 600 }}>Business Unit</p>
                      <p style={{ color: '#58C2C0', fontSize: '18px', fontWeigth: '600' }}>Manufacturing</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flex: '1', alignItems: 'center' }}>
                    <img src={imagenBuss2.IMAGENICON} alt="Logo" style={{ marginRight: '1rem' }} />
                    <div style={{ textAlign: 'left' }}>
                      <p style={{ color: 'black', fontSize: '18px', fontWeight: 600 }}>Business Unit</p>
                      <p style={{ color: '#58C2C0', fontSize: '18px', fontWeigth: '600' }}>Manufacturing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-user">
                <p style={{ color: 'black', fontWeight: '700', fontSize: '20px' }}>Other info</p>
                <p style={{ textAlign: 'left' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </Col>
          <div style={{ display: 'flex',  justifyContent: 'flex-end',marginLeft:'2rem' }}>
                <p style={{ fontSize: '20px', fontWeight: '700', color: 'black', marginRight: '10px' }}>Skills Added</p>
                <div style={{ marginLeft: 'auto' }}>
                <AppPopup open={modalVisible} handleCancel={() => setModalVisible(false)} skills={selectedSkills} handleSliderChange={handleRateSkill} handleSkillDelete={handleSkillDelete} />
                    <button onClick={() => setModalVisible(true)} style={{ marginTop:'1rem', display: 'flex', alignItems: 'center', border: 'none', background: 'none', cursor: 'pointer' }}>
                      <img src={imagenDeMagic.IMAGENICON} alt="Logo" style={{ width: '25px', marginRight: '5px' }} />
                      <span>Rate Skills</span>
                    </button>
                </div>
              </div>
        </Row>
      </Col>
    </Row>
  );
};

export default AppProfileUser;