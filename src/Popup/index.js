import React, { useEffect, useState } from 'react';
import { Modal, Slider, Typography, Progress, Row, Col, Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const AppPopup = ({ open, handleCancel, skills, handleSliderChange, handleSkillDelete }) => {
  const [skillsState, setSkillsState] = useState(skills);
  const navigate = useNavigate();
  const [skillName, setSkillName] = useState('');
  const [skillCategory, setSkillCategory] = useState('');
  const [addedSkills, setAddedSkills] = useState([]);

  const stepsTexts = [
    'Entry Level',
    'Proficient working knowledge',
    'Practitioner/Experienced',
    'Highly Experienced',
    'Expert'
  ];

  useEffect(() => {
    setSkillsState(skills);
  }, [skills]);

  const getProgressText = (value) => {
    return stepsTexts[value - 1];
  };

  const handleCreate = () => {
    setSkillsState([...skillsState, { title: skillName, category: skillCategory, rate: 1, id: `new-skill-${addedSkills.length}` }]);
    setAddedSkills([...addedSkills, { name: skillName, category: skillCategory }]);
    setSkillName('');
    setSkillCategory('');
    handleCancel();
  };

  const handleSaveAndRedirect = () => {
    const token = localStorage.getItem('token');
    const data = {
      skills: skillsState.map(skill => ({ name: skill.title, category: skill.category, rating: skill.rate, id: skill.id }))
    };
    fetch('http://3.8.157.187/api/users/employees/6b3f410b-2a44-4dc1-8ed0-0401a849bfbf/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Skills saved:', data);
      navigate('/profile-user');
    })
    .catch(error => {
      console.error('Error saving skills:', error);
    });
  };

  return (
    <Modal open={open} onCancel={handleCancel} footer={null} width="65%"  maskClosable={false}>
      <Typography.Title level={4} style={{ marginBottom: '16px', textAlign: 'left', fontSize: '25px' }}>
        My skills
      </Typography.Title>
      <p style={{ textAlign: 'left', marginTop: '-1rem' }}>Lorem Ipsum</p>
      
      <Input.Search
        style={{ marginBottom: '16px' }}
        placeholder="Search Skills, Providers, Hobbies"
        onSearch={(value) => {
          let filteredSkills = skills.filter(skill => skill.title.toLowerCase().includes(value.toLowerCase()));
          if(value === '') {
            filteredSkills = skills;
          }
          setSkillsState(filteredSkills);
        }}
      />

      {addedSkills.map((skill, index) => (
        <div key={index}>
          <p style={{ fontSize: '11px', marginBottom: '5px', fontWeight: '700' }}>{skill.name}</p>
          <p style={{ fontSize: '11px', fontWeight: '700' }}>{skill.category}</p>
        </div>
      ))}

      {skillsState.map((skill, index) => (
        <Row gutter={16} key={index}>
          <Col span={8}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {skill.image ?
                <img style={{ width: '25px', marginTop: '8px' }} src={skill.image} alt="Logo" /> 
              : <img style={{ width: '25px', marginTop: '8px' }} src='https://skillsat-dev.s3.eu-west-2.amazonaws.com/images/icon-1.png' alt="Logo" /> 
              }
              <Typography.Text style={{ marginBottom: '8px', fontWeight: '700', marginTop: '0.5rem' }}>{skill.title}</Typography.Text>
            </div>
          </Col>
          <Col span={16} style={{ margin: 'auto'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', whiteSpace: 'nowrap', marginRight: '5px' }} >Entry Level</span>
              <div style={{ width: '100%' }}>
                <Slider min={1} max={5} value={skill.rate} onChange={(value) => {handleSliderChange(index, value)}} tipFormatter={getProgressText} /> 
              </div>
              <span style={{ fontSize: '12px', display: 'flex', alignItems: 'center' }}>Expert <span style={{ marginLeft: '1rem', cursor: 'pointer', fontSize:'18px' }} onClick={() => handleSkillDelete(skill.id)}>⨯</span></span>
            </div>
          </Col>
        </Row>
      ))}
      
      <Progress
        trailColor="#fffff"
        strokeWidth={20}
        strokeColor={{
          '0%': '#fffff',
          '100%': '#fffff',
        }}
        strokeLabel={{
          '0%': 'Learner',
          '100%': 'Expert',
        }}
        format={getProgressText}
        style={{ marginTop: 16 }}
      />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <Button type="primary" style={{ marginRight: 8, width: '50%', color: '#041F72', fontWeight: '700', background: 'white', border: 'solid 1px #041F72', fontSize: '15px' }} onClick={handleCancel}>Cancel</Button>
        <Button style={{ width: '50%', background: '#041F72', color: 'white', fontWeight: '700', border: 'solid 1px #041F72', fontSize: '15px' }} onClick={handleSaveAndRedirect}>Save</Button>
      </div>
    </Modal>
  );
};

export default AppPopup;