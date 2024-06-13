import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col } from 'antd';
import {
  imagenDeIcon,
  imagenDeGit,
  imagenDeAtom,
  imagenDeJs,
  imagenDePhy,
  imagenDeC,
  imagenDeMy,
  imagenAws,
  imagenSsl,
  imagenApache,
  imagenDeResearch,
  imagenDeWordpress,
} from '../constante/imagen';
import CardArray from '../cardSkill';

const { Meta } = Card;

const CardArrayAdd = ({ cards, hideButtons }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  return (
    <div style={{ left: '-7rem' }}>
      <Row gutter={[16, 16]}>
        {cards.map((card, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card className='card_add_responsive'
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.7rem',
                textAlign: 'center',
                width: '100%',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  {card.image ? (
                    <img
                      style={{ width: '45%', marginTop: '0.5rem' }}
                      src={card.image}
                      alt="Logo"
                    />
                  ) : (
                    <img
                      style={{ width: '45%', marginTop: '0.5rem' }}
                      src="https://skillsat-dev.s3.eu-west-2.amazonaws.com/images/icon-1.png"
                      alt="Logo"
                    />
                  )}
                  <div style={{ color: 'black', fontWeight: '700' }}>
                    {card.title}
                  </div>
                </div>
              }
              actions={!hideButtons && [
                <Button
                  key="add"
                  type="primary"
                  icon={<PlusOutlined />}
                  style={{
                    float: 'right',
                    marginRight: '2px',
                    background: '#00007c',
                  }}
                  size="small"
                ></Button>,
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




