import React, { useState } from 'react';
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

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div
      style={{
        position: 'absolute',
        left: '-7rem',
        width: '400px',
      }}
    >
      <Row gutter={[16, 16]}>
        {upperCards.map((card, index) => (
          <Col key={index} span={8}>
            <Card
              style={{
                padding: '0.5rem 1rem',
                width: '95%',
                border: selectedCard === card ? '2px solid blue' : 'none',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  <img
                    style={{ width: '45%', marginTop: '0.5rem' }}
                    src={card.image}
                    alt="Logo"
                  />
                  <div style={{ color: 'black', fontWeight: '700' }}>
                    {card.title}
                  </div>
                </div>
              }
              actions={[

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
              style={{
                padding: '0.5rem 1rem',
                width: '90%',
                border: selectedCard === card ? '2px solid blue' : 'none',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  <img
                    style={{ width: '45%', marginTop: '0.5rem' }}
                    src={card.image}
                    alt="Logo"
                  />
                  <div style={{ color: 'black', fontWeight: '700' }}>
                    {card.title}
                  </div>
                </div>
              }
              actions={[

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