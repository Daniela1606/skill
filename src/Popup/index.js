import React, { useState } from 'react';
import { Modal, Slider, Typography, Progress, Row, Col, Button, Input } from 'antd';
import { imagenDeIcon } from '../constante/imagen';

const AppPopup = () => {
  const [stepsCount1, setStepsCount1] = useState(5);
  const [stepsCount2, setStepsCount2] = useState(5);
  const [stepsCount3, setStepsCount3] = useState(5);
  const [modalVisible, setModalVisible] = useState(true);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const formatSliderValue = (value) => {
    if (value === 0) {
      return 'Learner';
    } else if (value === 100) {
      return 'Expert';
    } else {
      return `Progress: ${value}%`;
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
        <Col span={12}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imagenDeIcon.IMAGENICON} alt="Logo" style={{ width: '50px', marginRight: '8px' }} />
            <Typography.Text style={{ marginBottom: '8px' }}>Skill</Typography.Text>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Slider min={0} max={100} value={stepsCount1} onChange={setStepsCount1} tipFormatter={formatSliderValue} />
          </div>
        </Col>
        <Col span={12}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imagenDeIcon.IMAGENICON} alt="Logo" style={{ width: '50px', marginRight: '8px' }} />
            <Typography.Text style={{ marginBottom: '8px' }}>Skill</Typography.Text>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Slider min={0} max={100} value={stepsCount2} onChange={setStepsCount2} tipFormatter={formatSliderValue} />
          </div>
        </Col>
        <Col span={12}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imagenDeIcon.IMAGENICON} alt="Logo" style={{ width: '50px', marginRight: '8px' }} />
            <Typography.Text style={{ marginBottom: '8px' }}>Skill</Typography.Text>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Slider min={0} max={100} value={stepsCount3} onChange={setStepsCount3} tipFormatter={formatSliderValue} />
          </div>
        </Col>
      </Row>

      <Progress
        trailColor="rgba(0, 0, 0, 0.06)"
        strokeWidth={20}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        strokeLabel={{
          '0%': 'Learner',
          '100%': 'Expert',
        }}
        format={() => ''}
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