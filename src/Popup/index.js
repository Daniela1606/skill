import React, { useState } from 'react';
import { Modal, Slider, Typography, Progress, Row, Col, Button, Input } from 'antd';
import { imagenDeIcon, imagenDeGit, imagenDeAtom2, imagenDeJs, imagenDePhy } from '../constante/imagen';

const AppPopup = () => {
  const [stepsCount1, setStepsCount1] = useState(5);
  const [stepsCount2, setStepsCount2] = useState(5);
  const [stepsCount3, setStepsCount3] = useState(5);
  const [stepsCount4, setStepsCount4] = useState(5);

  const [modalVisible, setModalVisible] = useState(true);

  const handleModalClose = () => {
    setModalVisible(false);
  };



  const getProgressText = (value) => {
    if (value >= 0 && value < 33) {
      return 'Proficient working knowledge';
    } else if (value >= 33 && value < 66) {
      return 'Practitioner/Experienced';
    } else if (value >= 66 && value < 100) {
      return 'Highly Experienced';
    } 
  };

  return (
    <Modal visible={modalVisible} onCancel={handleModalClose} footer={null}>

      <Typography.Title level={4} style={{ marginBottom: '16px', textAlign: 'left', fontSize: '25px' }}>
        My skills
      </Typography.Title>
      <p style={{ textAlign: 'left', marginTop: '-1rem' }}>Lorem Ipsum</p>

      <Input.Search style={{ marginBottom: '16px' }} placeholder="Search Skills, Vendors, Hobbies" />

      <Row gutter={16}>
        <Col span={7}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imagenDeGit.IMAGENICON} alt="Logo" style={{ width: '25px', marginRight: '8px' }} />
            <Typography.Text style={{ marginBottom: '8px', fontWeight: '700', marginTop:'0.5rem' }}>GitHub</Typography.Text>
          </div>
        </Col>
        <Col span={17}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{fontSize:'12px', whiteSpace:'nowrap'}} >Entry Level</span>
            <div style={{width: '100%'}}>
              <Slider min={0} max={100} value={stepsCount1} onChange={setStepsCount1} tipFormatter={getProgressText} />
            </div>
            <span style={{fontSize:'12px'}}>Expert</span>          
          </div>
        </Col>
        <Col span={7}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imagenDeAtom2.IMAGENICON} alt="Logo" style={{ width: '25px', marginRight: '8px' }} />
            <Typography.Text style={{ marginBottom: '8px', fontWeight: '700', marginTop:'0.5rem' }}>Atom</Typography.Text>
          </div>
        </Col>
        <Col span={17}>
          <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{fontSize:'12px', whiteSpace:'nowrap'}} >Entry Level</span>
          <div style={{width: '100%'}}>
            <Slider min={0} max={100} value={stepsCount2} onChange={setStepsCount2} tipFormatter={getProgressText} />
          </div>
          <span style={{fontSize:'12px'}}>Expert</span>          
          </div>
        </Col>
        <Col span={7}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imagenDeJs.IMAGENICON} alt="Logo" style={{ width: '25px', marginRight: '8px' }} />
            <Typography.Text style={{ marginBottom: '8px', fontWeight: '700', marginTop:'0.5rem' }}>Java Script</Typography.Text>
          </div>
        </Col>


        <Col span={17}>
          <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{fontSize:'12px', whiteSpace:'nowrap'}} >Entry Level</span>
          <div style={{width: '100%'}}>
            <Slider min={0} max={100} value={stepsCount3} onChange={setStepsCount3} tipFormatter={getProgressText} />
          </div>
          <span style={{fontSize:'12px'}}>Expert</span>          
          </div>
        </Col>

        <Col span={7}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imagenDePhy.IMAGENICON} alt="Logo" style={{ width: '25px', marginRight: '8px' }} />
            <Typography.Text style={{ marginBottom: '8px', fontWeight: '700', marginTop:'0.5rem' }}>Phyton</Typography.Text>
          </div>
        </Col>


        <Col span={17}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{fontSize:'12px', whiteSpace:'nowrap'}} >Entry Level</span>
          <div style={{width: '100%'}}>
            <Slider min={0} max={100} value={stepsCount4} onChange={setStepsCount4} tipFormatter={getProgressText} />
          </div>
          <span style={{fontSize:'12px'}}>Expert</span>          
          </div>
        </Col>
      </Row>
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
        <Button type="primary" style={{ marginRight: 8, width: '50%', color: '#041F72', fontWeight: '700', background: 'white', border: 'solid 1px #041F72', fontSize: '15px' }}>Cancel</Button>
        <Button style={{ width: '50%', background:'#041F72', color: 'white', fontWeight: '700', border: 'solid 1px #041F72', fontSize: '15px' }}>Save</Button>
      </div>
    </Modal>
  );
};

export default AppPopup;