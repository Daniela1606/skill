

import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col } from 'antd';
import { imagenDeIcon, imagenDeGit, imagenDeAtom, imagenDeJs, imagenDePhy, imagenDeC, imagenDeMy, imagenAws, imagenSsl, imagenApache, imagenDeResearch, imagenDeWordpress } from '../constante/imagen';
import CardArray from '../cardSkill';

const { Meta } = Card;

const CardArrayAdd = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const handleCardAdded = (card) => {
    setCards([...cards, card]);
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: '-7rem',
        width: '400px',
      }}
    >
      <Row gutter={[16, 16]}>
        {cards.map((card, index) => (
          <Col key={index} span={8}>
            <Card
              style={{
                padding: '0.5rem 1rem',
                width: '95%',
                border: '2px solid blue',
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
            >
              <Meta />
            </Card>
          </Col>
        ))}
      </Row>
      <CardArray searchData={cards} onCardAdded={handleCardAdded} />
    </div>
  );
};

export default CardArrayAdd;





/* import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col } from 'antd';
import { imagenDeIcon } from '../constante/imagen';
import CardArray from '../cardSkill';

const { Meta } = Card;

const CardArrayAdd = () => {
  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

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
                <Button
                  key="add"
                  type="primary"
                  icon={<PlusOutlined />}
                  style={{ float: 'right', marginRight: '2px', background: '#00007c' }}
                  size="small"
                  onClick={() => handleCardSelect(card)}
                ></Button>
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
                <Button
                  key="add"
                  type="primary"
                  icon={<PlusOutlined />}
                  style={{ float: 'right', marginRight: '2px', background: '#00007c' }}
                  size="small"
                  onClick={() => handleCardSelect(card)}
                ></Button>
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

export default CardArrayAdd; */
