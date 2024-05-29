import React, { useEffect, useState } from 'react';
import { SearchOutlined, InfoCircleOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { Layout, Menu, Modal, message, theme, Button, Space, } from 'antd';
import { imagenLo, imagenLogoAzul, imagenBuscar, imagenEmpleo, imagenProbando, imagenDeFooter, imagenDeAvatar, imagenDeMagic } from '../constante/imagen';
import Appsearch from "../search";
import VerifyForm from '../components/VerifyForm';
import ReportInvalidDataForm from '../components/ReportInvalidDataForm';
import './styles.css'
import AppOnboarding from '../onboarding';
import AppCard from "../cardSkill/index";
import AppCardAdd from "../cardSkillAdd/index";
import AppAvatar from '../imagenAvatar';
import AppPopup from '../Popup/index';
import AppsearchTarget from '../searchTarget';

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: '0',
    label: 'General',
    type: 'group',
    children: [],
  },
  {
    key: '1',
    icon: <SearchOutlined />,
    label: 'Search',
  },
  {
    key: '2',
    label: 'General',
    type: 'group',
    children: [],
  },
  {
    key: '3',
    icon: <InfoCircleOutlined />,
    label: 'Help',
  },
  {
    key: '4',
    icon: <MailOutlined />,
    label: 'Contact',
  },
  {
    key: '5',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];




const MenuLogin = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { id } = useParams();

  const [status] = useState(localStorage.getItem('status'))
  const [token] = useState(localStorage.getItem('token'))
  const [reportIsActive, setReportIsActive] = useState(false);
  const navigate = useNavigate()
  const [modalVisible, setModalVisible] = useState(false);
  console.log({ status })

  const [showOnboardingVideo, setShowOnboardingVideo] = useState(false)

  const [employee, setEmployee] = useState(null);
  const [verifyOpen, setVerifyOpen] = useState(null);
  const [messageApi, contextHolder] = message.useMessage()
  const [validateFormInstance, setValidateFormInstance] = useState(null);

  const [skills, setSkills] = useState([]);
  const [selectedSkills , setSelectedSkills] = useState([]);

  function handleSearch(value) {
    setSkills(value);
  }

  function handleAddSkill(value) {
    if (!selectedSkills.some((selected) => selected.id === value.id)) {
      setSelectedSkills([...selectedSkills, { ...value, rate: 0 }]);
    }
  }

  function handleRateSkill(idx, value) {
    setSelectedSkills(selectedSkills.map((skill, index) => index === idx ? { ...skill, rate: value} : skill));
  }

  const handleSkillDelete = (skillId) => {
    setSelectedSkills(prevSkills => prevSkills.filter(skill => skill.id !== skillId));
  };


  const handleRateSkillsClick = () => {
    setModalVisible(true);
  };

  useEffect(() => {

    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://13.42.59.26/Api/users/employees/${id}`);
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

  const confirmValidData = async () => {
    return await fetch('http://13.42.59.26/api/users/employees/verify-correct-data', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ id: employee.user.id })
    })
      .then(response => {
        console.log(response.status);
        return response.json()
      })
  };

  const reportInvalidData = async (data) => {
    console.log({ token })
    return fetch('http://13.42.59.26/api/users/employees/report-incorrect-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response);
        return response.json()
      })
      .catch(error => {
        throw error
      })
  };

  const onCreate = () => {
    setVerifyOpen(false)
    setReportIsActive(false)

    if (reportIsActive) {
      return Modal.success({
        okText: 'Log out',
        onOk: () => {
          localStorage.clear()
          sessionStorage.clear()
          navigate('/')

        },
        content: 'We have  your issue with your Admin team and will get in contact as soon as it is resolved. Until this is resolved you will not be able to build your profile',
      })
    } else {
      setTimeout(() => {
        setShowOnboardingVideo(true)
      }, 1000)
    }
  }

  useEffect(() => {
    if (status === 'Pending') {
      setVerifyOpen(true);
    }
  }, [status])




  const handleLogout = () => {
    navigate('/');
  };



  return (
    <Layout id='main-layout' style={{
      height: '100vh',
      background: 'linear-gradient(200deg, rgba(73,164,248,0.24) 4%, rgba(15,209,186,0.07) 14%, rgba(255,255,255,1) 27%, rgba(255,255,255,1) 58%, rgba(15,209,186,0.07) 75%, rgba(73,164,248,0.24) 92%)',
    }}
    >
      <Sider width={350}>
        <div style={{ margin: '1em', border: '1px solid #ddd', borderRadius: '15px', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: '97.3%', background: 'transparent' }}>
          <Header
            id='header'
            style={{
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={imagenLo.IMAGENICON} alt="Logo" />
            </div>
            <div className="demo-logo" />
          </Header>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              borderRight: 0,
              background: 'transparent',
              flexGrow: 1,
            }}
            items={items}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 8px',
              borderRadius: '10px',
              marginBottom: '1em',
              boxSizing: 'border-box',
              justifySelf: 'center',
              alignSelf: 'center',
              background: '#58C2C01A',
              width: '90%'
            }}>
            <div>
              <img src={imagenDeAvatar.IMAGENICON} alt="Logo" />
            </div>



            <p>{employee ? employee.user.firstName : ''}</p>

          </div>

        </div>


      </Sider>
      <Layout id='body-layout' style={{ padding: '1em', overflowY: 'scroll' }}>
        <Header
          style={{
            paddingLeft: '24px',
            height: 'fit-content',
            paddingRight: '0px',
            maxHeight: 200,
            background: '#ffffff75',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            border: 'solid 1px #EFEEFC',
            overflow: 'hidden'
          }}
        >
          <div>
            <p style={{ fontSize: '40px', fontWeight: '700', color: 'black' }}>
              Welcome, {employee ? employee.user.preferredName : ''}</p>
            <p>Improve your profile by completing the skills section</p>
          </div>
          <img src={imagenLogoAzul.IMAGENICON} alt="Logo" style={{ marginLeft: 'auto', height: '100%' }} />
        </Header>
        <Layout
          style={{
            marginTop: '1em',
          }}
        >
          <Content
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: '1',
            }}
          >
            <div style={{
              maxWidth: '900px',
            }}>
              <p style={{ fontSize: '20px', marginBottom: '1em', fontWeight: '700', color: 'black' }}>
                Find your skill
              </p>
              <Appsearch onSearch={handleSearch} />
            </div>
            <div
              style={{
                marginTop: '3em',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                maxWidth: '900px',
              }}
            >
              <div
                style={{
                }}
              >
                <p style={{ fontSize: '20px', fontWeight: '700', color: 'black' }}>Suggestions</p>
                <div style={{
                  marginTop: '2em'
                }}>
                  <AppCard searchData={skills.filter(skill => (!selectedSkills.some((selected) => selected.id === skill.id)))} onCardAdded={handleAddSkill} />
                </div>
                
              </div>


              <div>
                <AppPopup open={modalVisible} handleCancel={() => setModalVisible(false)} skills={selectedSkills} handleSliderChange={handleRateSkill} handleSkillDelete={handleSkillDelete} />
                    <button onClick={() => setModalVisible(true)} style={{ display: 'flex', alignItems: 'center', border:'solid 1px rgb(0, 0, 124)' ,borderRadius:'20px', background: 'rgb(0, 0, 124)', cursor: 'pointer', color:'white',
                  fontSize:'15px', fontWeight:'600', padding:'0.5rem' }}>
                      <span>I'm finished adding</span>
                    </button>
                </div>


              <div style={{
                background: 'linear-gradient(to bottom, #AFDFBB, #58C2C0)',
                borderRadius: '20px',
                padding: '20px',
                marginTop:'2rem',

              }}>
                <p style={{ fontWeight: '700', fontSize: '19px' }}>Need a hand refining your skills? Submit an answer to the below question</p>
                <p style={{fontSize:'16px', fontWeight: '500'}}>What previews roles have you had before your current position ?</p>
                <AppsearchTarget/>

              
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button style={{ background: 'white', border: 'solid 1px white', width: '20%', borderRadius: '20px', padding: '10px',  fontWeight: '700', marginTop:'2rem' }}>Submit</button>

                  <p style={{ color: '#686B6E', fontSize: '18px' }}>Next Question → </p>
                </div>
                
              </div>
            </div>
          </Content>
          <Sider
            width={350}
            style={{
              paddingLeft: '1em',
            }}
          >
            <div style={{width: 'fit-content',margin: '0 auto'}}> 
              <img src={imagenBuscar.IMAGENICON} style={{ maxWidth: '100%', borderRadius: '1em' }} width={315} alt="Logo" />
            </div>
              <AppAvatar />
            <div >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <p style={{ fontSize: '20px', fontWeight: '700', color: 'black', marginRight: '10px' }}>Skills Added</p>
                <div style={{ marginLeft: 'auto' }}>
                <AppPopup open={modalVisible} handleCancel={() => setModalVisible(false)} skills={selectedSkills} handleSliderChange={handleRateSkill} handleSkillDelete={handleSkillDelete} />
                    <button onClick={() => setModalVisible(true)} style={{ display: 'flex', alignItems: 'center', border: 'none', background: 'none', cursor: 'pointer' }}>
                      <img src={imagenDeMagic.IMAGENICON} alt="Logo" style={{ width: '25px', marginRight: '5px' }} />
                      <span>Rate Skills</span>
                    </button>
                </div>
              </div>
              <AppCardAdd cards={selectedSkills} hideButtons={true}/>
            </div>
          </Sider>
        </Layout>




        {contextHolder}
      </Layout>
      <Modal
        closeIcon={false}
        width={840}
        open={verifyOpen}
        title="Let's check your details are correct"
        okText={!reportIsActive ? "Everything is correct" : 'Send Report'}
        cancelText={!reportIsActive ? "Something is not correct" : 'Back'}
        okButtonProps={{
          autoFocus: true,
        }}
        onCancel={(event) => {
          const target = event.target.localName;
          if (target === 'span' || target === 'button') {
            setReportIsActive(!reportIsActive);
          }
        }}
        destroyOnClose
        onOk={async () => {
          let result;
          try {
            if (!reportIsActive) {
              // "Everything is correct"
              await confirmValidData()
              messageApi.open({ type: 'success', content: 'User data confirmed successfully' })

            } else {

              const formValues = validateFormInstance.getFieldsValue();
              console.log({ formValues });
              result = await reportInvalidData(formValues);

              console.log({ result });
              if (result.error) {
                throw result.error.message;
              }

              Modal.success({
                okText: 'Log out',
                content: 'We have received your issue with your Admin team and will get in contact as soon as it is resolved. Until this is resolved, you will not be able to build your profile.',
                onOk: handleLogout,


              });
              /*         messageApi.open({ type: 'success', content: 'prueba2' }); 
               */
            }

            validateFormInstance?.resetFields();
            onCreate();
          } catch (error) {
/*       messageApi.open({ type: 'error', content: error.toString() }); 
 */    }
        }}
      >
        {
          !reportIsActive ?
            <VerifyForm
              initialValues={{ ...employee, ...employee?.user, ...employee?.user.address, birthday: employee?.user.birthdate?.split('T')[0] }}
              onFormInstanceReady={(instance) => {
                setValidateFormInstance(instance);
              }}
            /> :
            <ReportInvalidDataForm
              onFormInstanceReady={(instance) => {
                setValidateFormInstance(instance);
              }}
            />
        }
      </Modal>
      <Modal
        title="Onboarding Video"
        open={showOnboardingVideo}
        onCancel={() => setShowOnboardingVideo(false)}
        destroyOnClose
        footer={null}
        style={{ minWidth: 'fit-content' }}
      >
        <AppOnboarding onConfirmClick={() => (setShowOnboardingVideo(false))} />
      </Modal>

    </Layout>
  );
};

export default MenuLogin;