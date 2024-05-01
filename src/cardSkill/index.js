import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col } from 'antd';
import { imagenDeIcon } from '../constante/imagen';

const { Meta } = Card;

const CardArray = () => {
  const cardData = [
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
    { title: 'Skill ', image: imagenDeIcon.IMAGENICON },
  ];

  const upperCards = cardData.slice(0, 6); 
  const lowerCards = cardData.slice(6, 12);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {upperCards.map((card, index) => (
          <Col key={index} span={4}>
            <Card
              style={{ width: '60%' }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  <img style={{ width: '35%' }} src={card.image} alt="Logo" />
                  <div style={{ color: 'black', fontWeight: '700' }}>{card.title}</div>
                </div>
              }
              actions={[
                <Button key="add" type="primary" icon={<PlusOutlined />} style={{ float: 'right', marginRight: '2px', background: '#00007c' }}>
                </Button>
              ]}
            >
              <Meta />
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]}>
        {lowerCards.map((card, index) => (
          <Col key={index} span={4}>
            <Card
              style={{ width: '60%' }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  <img style={{ width: '35%' }} src={card.image} alt="Logo" />
                  <div style={{ color: 'black', fontWeight: '700' }}>{card.title}</div>
                </div>
              }
              actions={[
                <Button key="add" type="primary" icon={<PlusOutlined />} style={{ float: 'right', marginRight: '2px', background: '#00007c' }}>
                </Button>
              ]}
            >
              <Meta />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardArray;