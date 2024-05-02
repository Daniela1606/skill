import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col } from 'antd';
import { imagenDeIcon } from '../constante/imagen';

const { Meta } = Card;

const CardArrayAdd = () => {
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

  const upperCards = cardData.slice(0, 3); 
  const lowerCards = cardData.slice(3, 6);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {upperCards.map((card, index) => (
          <Col key={index} span={8}>
            <Card
              style={{ width: '90%' }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  <img style={{ width: '45%', marginTop:'0.5rem'}} src={card.image} alt="Logo" />
                  <div style={{ color: 'black', fontWeight: '700' }}>{card.title}</div>
                </div>
              }
              actions={[
/*                 <Button key="add" type="primary" icon={<PlusOutlined />} style={{ float: 'right', marginRight: '2px', background: '#00007c' }}>
                </Button> */
              ]}
            >
              <Meta />
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={[0, 0]}>
        {lowerCards.map((card, index) => (
          <Col key={index} span={8}>
            <Card
              style={{ width: '90%' }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  <img style={{ width: '45%', marginTop:'0.5rem'}} src={card.image} alt="Logo" />
                  <div style={{ color: 'black', fontWeight: '700' }}>{card.title}</div>
                </div>
              }
              actions={[
/*                 <Button key="add" type="primary" icon={<PlusOutlined />} style={{ float: 'right', marginRight: '2px', background: '#00007c' }}>
                </Button> */
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

export default CardArrayAdd;