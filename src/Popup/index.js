import React, { useState } from 'react';
import { Modal, Slider, Typography, Progress, Row, Col, Button, Input } from 'antd';
import { imagenDeIcon, imagenDeGit, imagenDeAtom2, imagenDeJs, imagenDePhy } from '../constante/imagen';

const AppPopup = ({ open, handleCancel, skills, handleSliderChange, handleSkillDelete }) => {

  const [skillsState, setSkillsState] = useState(skills);




  const handleDeleteSkill = (skillId) => {
  setSkillsState(prevSkills => prevSkills.filter(skill => skill.id !== skillId));
  if (typeof handleSkillDelete === 'function') {
    handleSkillDelete(skillId);
  }
};

  const stepsTexts = [
    'Entry Level',
    'Proficient working knowledge',
    'Practitioner/Experienced',
    'Highly Experienced',
    'Expert'
  ];

  const getProgressText = (value) => {
    return stepsTexts[value - 1];
  };



  return (
    <Modal open={open} onCancel={handleCancel} footer={null}>

      <Typography.Title level={4} style={{ marginBottom: '16px', textAlign: 'left', fontSize: '25px' }}>
        My skills
      </Typography.Title>
      <p style={{ textAlign: 'left', marginTop: '-1rem' }}>Lorem Ipsum</p>

      <Input.Search style={{ marginBottom: '16px' }} placeholder="Search Skills, Vendors, Hobbies" />

      {
        skills.map((skill, index) => (
          <Row gutter={16} key={index}>
            <Col span={8}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={skill.image} alt="Logo" style={{ width: '25px', marginRight: '8px' }} />
                <Typography.Text style={{ marginBottom: '8px', fontWeight: '700', marginTop: '0.5rem' }}>{skill.title}</Typography.Text>
              </div>
            </Col>
            <Col span={16}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', whiteSpace: 'nowrap' }} >Entry Level</span>
                <div style={{ width: '100%' }}>
                  <Slider min={1} max={5} value={skill.rate} onChange={(value) => {handleSliderChange(index, value)}} tipFormatter={getProgressText} /> 
                </div>
                <span style={{ fontSize: '12px', display: 'flex', alignItems: 'center' }}>Expert <span style={{ marginLeft: '1rem', cursor: 'pointer', fontSize:'18px' }} onClick={() => handleDeleteSkill(skill.id)}>x</span></span>
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
        <Button style={{ width: '50%', background: '#041F72', color: 'white', fontWeight: '700', border: 'solid 1px #041F72', fontSize: '15px' }}>Save</Button>
      </div>
    </Modal>
  );
};

export default AppPopup;