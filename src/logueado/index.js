import React, { useEffect, useState } from 'react';
import { SearchOutlined, InfoCircleOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { Layout, Menu, Modal, message, theme, Button, Space, Pagination, } from 'antd';
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
  const [filteredCards, setFilteredCards] = useState([]);


  const [employee, setEmployee] = useState(null);
  const [verifyOpen, setVerifyOpen] = useState(null);
  const [messageApi, contextHolder] = message.useMessage()
  const [validateFormInstance, setValidateFormInstance] = useState(null);

  const [skills, setSkills] = useState([]);
  const [selectedSkills , setSelectedSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState('');
  const [cardsPerPage, setCardsPerPage] = useState(12);


  const [showModal, setShowModal] = useState(false);


  const [skillName, setSkillName] = useState('');
  const [skillCategory, setSkillCategory] = useState('');
  const [addedSkills, setAddedSkills] = useState([]);




  
  //cajita verde
  const handleInputChange = (newValue) => {
    setInputValue(newValue.target.value);
  };



  
//cajita verde

  const [questions, setQuestions] = useState([
    {
      title: 'Need a hand refining your skills? ',
      question: 'What do you consider your main area of expertise to be?',
      queryCategory: 'Skill'
    },
    {
      title: 'Need a hand refining your skills? ',
      question: 'What industries/sectors do you have experience of?',
      queryCategory: 'Skill'
    },
    {
      title: 'Need a hand refining your skills? ',
       question: 'What are you top 5 business skills?',
      queryCategory: 'Skill'
    },
    {
      title: 'Need a hand refining your skills? ',
      question: 'What are your top 5 interpersonal skills?',
      queryCategory: 'Skill'
    },
    {
       title: 'Need a hand refining your skills? ',
      question: 'What leadership attributes can you contribute?',
      queryCategory: 'Skill'
    },
    {
      title: 'Need a hand refining your skills? ',
      question: 'What other expertise and knowledge can you share?',
      queryCategory: 'Skill'
    },
    {
      title: 'Need a hand refining your skills?',
       question: 'What systems have you experience of using?',
      queryCategory: 'System'
    },
    // {
    //   title: 'Need a hand refining your skills? Submit an answer to the below question',
    //   question: 'What providers/external vendors have you worked with',
    // },
    {
      title: 'Need a hand refining your skills?',
      question: 'What languages are you able to speak?',
      queryCategory: 'Language'
    },
    {
       title: 'Need a hand refining your skills?',
      question: 'What languages are you able to speak?',
      queryCategory: 'Language'
    },
    {
      title: 'Need a hand refining your skills?',
      question: 'What are your interests and hobbies?',
      queryCategory: 'Hobbie'
    },
    {
       title: 'Need a hand refining your skills? ',
      question: 'Do you have any certifications or qualifications?',
      queryCategory: 'Certification'
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

const handleNextQuestion = () => {
  setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  
  setInputValue('');
};

useEffect(() => {
  handleQuestionSubmit(null, '')

}, [currentQuestionIndex])



const handleButtonClickModal = () => {
  setShowModal(true);
};


/* const handleCloseModal = () => {
  setShowModal(false);
};
 */


const handleCloseModal = () => {
  setSkillName('');
  setSkillCategory('');
  setShowModal(false);
};


const handleCreate = () => {
/*   setAddedSkills([...addedSkills, { name: skillName, category: skillCategory }]);
 */ 
handleAddSkill({title: skillName, category: skillCategory, id:selectedSkills.length+1})

handleCloseModal();
};


  function handleSearch(value) {
    setSkills(value);
  }

  function handleAddSkill(value) {
    if (!selectedSkills.some((selected) => selected.id === value.id)) {
      setSelectedSkills([...selectedSkills, { ...value, rate: 0 }]);
    }
    console.log({value})
    const {categories} = value
    handleSearchSubmit('', categories)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    handleSearchSubmit(currentSearch)

  }, [currentPage, currentSearch, selectedSkills])
  
  const handleSearchSubmit = (value, relations, itemsPerPage = 10) => {
    console.log(value);
    let parsedRelations = '';
    if (relations && relations.length > 0) {
      parsedRelations = relations.filter(category => category !== '').map(category => category.toLowerCase()).join(', ');
    }

    setCurrentSearch(value)
  
    console.log({ categories: relations, parsedCategories: parsedRelations });
    const token = localStorage.getItem('token');

    console.log({selectedSkills})

    const ignoredParams = selectedSkills.map(skill => '&ignored[]=' + skill.id).join('')
  
    fetch(`http://3.8.157.187/api/skills/?itemsPerPage=${cardsPerPage}&currentPage=${Number(currentPage)}&search=${parsedRelations.length > 0 ? parsedRelations : value}${ignoredParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log({ data });

        setLastPage(Math.min(data.lastPage, 4))
  
        const cards = data.skills ? data?.skills?.map(item => ({
          id: item.id,
          title: item.name,
          image: item.image,
          categories: [
            item.tier1,
            item.tier2,
            item.tier3,
            item.tier4,
          ]
        })) : [];
        const totalCount = data.totalCount;
        const totalPages = Math.ceil(totalCount / itemsPerPage);
        handleSearch(cards, totalCount, totalPages, currentPage);
      })
      .catch(error => {
        console.error(error);
      });
  };
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

  const confirmValidData = async () => {
    return await fetch('http://3.8.157.187/api/users/employees/verify-correct-data', {
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
    return fetch('http://3.8.157.187/api/users/employees/report-incorrect-data', {
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





  //cajita verde

  const handleQuestionSubmit = async (event, inputValue) => {
    event?.preventDefault();
    
    try {
      console.log({ inputValue })
      console.log('holaaaaaaaaaaaaa')
      const ignoredParams = selectedSkills.map(skill => '&ignored[]=' + skill.id).join('')
      const response = await fetch(`http://3.8.157.187/api/skills?itemsPerPage=${cardsPerPage}&currentPage=1&search=${inputValue ?? ''}&category=${questions[currentQuestionIndex].queryCategory}${ignoredParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      const cards = data.skills? data?.skills?.map(item => ({id: item.id, title: item.name, image: item.image })) : [];
      handleSearch(cards);
      console.log(data);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };
  
 



  return (
    <Layout id='main-layout' style={{
      height: '100vh',
      background: 'linear-gradient(200deg, rgba(73,164,248,0.24) 4%, rgba(15,209,186,0.07) 14%, rgba(255,255,255,1) 27%, rgba(255,255,255,1) 58%, rgba(15,209,186,0.07) 75%, rgba(73,164,248,0.24) 92%)',
    }}
    >
      <Sider  width={350}>
        <div className='probandoMobile2' /* style={{ margin: '1em', border: '1px solid #ddd', borderRadius: '15px',
         overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: '97.3%', background: 'transparent' }} */>
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
              <img className='imagenLogoResponsive' src={imagenLo.IMAGENICON} alt="Logo"  />
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
          <div >
            <p  className='name_responsive'style={{ fontSize: '40px', fontWeight: '700', color: 'black' }}>
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
              <Appsearch onSearch={handleSearch} handleSearch={(value) => {
                setCurrentPage(1)
                setCurrentSearch(value)
              }} />
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
  <AppCard
    searchData={skills.filter(skill => (!selectedSkills.some((selected) => selected.id === skill.id)))}
    onCardAdded={handleAddSkill}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    cardsPerPage={cardsPerPage}
  />
<div style={{
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1em',
    marginBottom: '1em',
    border: 'solid 0px white'
}}>
    <Pagination 
        defaultCurrent={1}
        total={lastPage * cardsPerPage}
        pageSize={cardsPerPage}
        onChange={handlePageChange}
        current={currentPage}
        size='small'
        itemRender={(page, type, originalElement) => {
            if (type === 'page') {
                return <a ></a>;
            }
            return originalElement;
        }}
    />
</div>
</div>
                
              </div>


              <div>
  <AppPopup 
    open={modalVisible}
    handleCancel={() => setModalVisible(false)}
    skills={selectedSkills} 
    handleSliderChange={handleRateSkill}
    handleSkillDelete={handleSkillDelete}
  /> 
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
    <button onClick={() => setModalVisible(true)} style={{ display: 'flex', alignItems: 'center', border:'1px solid white' ,borderRadius:'20px', background: 'linear-gradient(rgb(175 223 187 / 6%), rgb(88 194 192 / 24%))', cursor: 'pointer', color:'black', fontSize:'15px', fontWeight:'600', padding:'0.5rem', fontFamily:'Manrope Variable', fontWeight:'600' }}>
      <span style={{ paddingRight:'3rem', paddingLeft:'3rem' }}>I'm Finished Adding</span>
    </button>
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid white',
        borderRadius: '20px',
        background: 'linear-gradient(rgb(175 223 187 / 6%), rgb(88 194 192 / 24%))',
        cursor: 'pointer',
        color: 'black',
        fontSize: '15px',
        fontWeight: '600',
        padding: '0.5rem',
        fontFamily: 'Manrope Variable',
        fontWeight: '600',
      }}
      onClick={handleButtonClickModal}
    >
      <span style={{ paddingRight: '3rem', paddingLeft: '3rem' }}>
        I can't find what I'm looking for
      </span>
    </button>
  </div>
</div>

<div>
  {showModal && (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <h3 style={{ margin: 0, fontSize:'20px' }}>Create Your Skill</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Skill Name"
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
          <select
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            value={skillCategory}
            onChange={(e) => setSkillCategory(e.target.value)}
          >
            <option value=""> Select Category</option>
            <option value="Skill">Skill</option>
            <option value="Hobbie">Hobbie</option>
            <option value="System">System</option>
            <option value="Certification">Certification</option>
            <option value="Language">Language</option>
          </select>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={handleCloseModal}
            style={{
              background: 'white',
              border: 'none',
              padding: '0.5rem 2rem',
              border: 'solid 1px #041F72',
              borderRadius: '4px',
              color: '#041F72',
              fontWeight: '700', 
              cursor: 'pointer',
              fontSize:'15px'
            }}
          >
            Cancel
          </button>
          <button
            style={{
              background: '#041F72',
              border: 'none',
              padding: '0.5rem 2rem',
              border: 'solid 1px #041F72',
              borderRadius: '4px',
              color: 'white',
              fontWeight: '700', 
              cursor: 'pointer',
              fontSize:'15px'
            }}
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )}
</div>



{/* cajita verde
 */}
       <div className='caja_verde_responsive'
      style={{
        background: 'linear-gradient(to bottom, #AFDFBB, #58C2C0)',
        borderRadius: '20px',
        padding: '20px',
        marginTop: '2rem',
      }}
    >
      <p style={{ fontWeight: '700', fontSize: '19px' }}>
        {questions[currentQuestionIndex].title}
      </p>
      <p style={{ fontSize: '16px', fontWeight: '500' }}>
        {questions[currentQuestionIndex].question}
      </p>
      <AppsearchTarget onInputChange={handleInputChange} inputValue={inputValue} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            background: 'white',
            border: 'solid 1px white',
            width: '20%',
            borderRadius: '20px',
            padding: '10px',
            fontWeight: '700',
            marginTop: '2rem',
          }}
          onClick={(e) => handleQuestionSubmit(e, inputValue)}
        >
          Submit
        </button>

        <button
          style={{ color: '#686B6E', fontSize: '18px', background:"#ff000000" , border:'solid 1px #ff000000'}}
          onClick={(e) => handleNextQuestion(e, inputValue)}
        >
          Next Question →
        </button>
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
              <img className='imagen_Buscar' src={imagenBuscar.IMAGENICON} style={{ maxWidth: '100%', borderRadius: '1em' }} width={315} alt="Logo" />
            </div>
              <AppAvatar />
            <div >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <p  className='name_skills' style={{ fontSize: '20px', fontWeight: '700', color: 'black', marginRight: '10px' }}>Skills Added</p>


              
                <div  style={{ marginLeft: 'auto' }}>
                <AppPopup open={modalVisible} handleCancel={() => setModalVisible(false)} skills={selectedSkills} handleSliderChange={handleRateSkill} handleSkillDelete={handleSkillDelete} />
                    <button  onClick={() => setModalVisible(true)} style={{ display: 'flex', alignItems: 'center', border: 'none', background: 'none', cursor: 'pointer' }}>
                      <img className='boton_skill' src={imagenDeMagic.IMAGENICON} alt="Logo" style={{ width: '25px', marginRight: '5px' }} />
                      <span className='boton_skill'>Rate Skills</span>
                    </button>
                </div>
              </div>


              <AppCardAdd className='card_skill_responsive' cards={selectedSkills} hideButtons={true}/>
              <div style={{  padding: '10px', borderRadius: '4px', display: 'inline-block', textAlign:'center' }}>
              {addedSkills.map((skill, index) => (
  <div
    key={index}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      padding: '10px',
      borderRadius: '4px',
      width: '8rem',
      lineHeight:'9px',
      height:'6.5rem',

      marginLeft:'6%',
  
      ...(index > 0 ? { marginTop: '10px' } : {})
    }}
  >
    <p style={{ fontSize: '11px', marginBottom: '5px', fontWeight: '700' }}>{skill.name}</p>
    <p style={{ fontSize: '11px', fontWeight: '700' }}>{skill.category}</p>
  </div>
))}
</div>
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