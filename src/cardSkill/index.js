import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col } from 'antd';
import { imagenDeIcon, imagenDeGit, imagenDeAtom, imagenDeJs, imagenDePhy, imagenDeC, imagenDeMy,imagenAws, imagenSsl, imagenApache } from '../constante/imagen';

const { Meta } = Card;

const CardArray = () => {
  const cardData = [
    { title: 'GitHub ', image: imagenDeGit.IMAGENICON },
    { title: '', image: imagenDeAtom.IMAGENICON },
    { title: 'JavaScript ', image: imagenDeJs.IMAGENICON },
    { title: 'Phyton ', image: imagenDePhy.IMAGENICON },
    { title: 'C ', image: imagenDeC.IMAGENICON },
    { title: 'My SQL ', image: imagenDeMy.IMAGENICON },
    { title: 'AWS ', image: imagenAws.IMAGENICON },
    { title: 'Azure ', image: imagenDeMy.IMAGENICON },
    { title: 'Apache ', image: imagenApache.IMAGENICON },
    { title: 'SSL', image: imagenSsl.IMAGENICON },
    { title: 'Wordpress ', image: imagenDeIcon.IMAGENICON },
    { title: 'Research ', image: imagenDeIcon.IMAGENICON },
  ];

  const upperCards = cardData.slice(0, 6); 
  const lowerCards = cardData.slice(6, 12);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {upperCards.map((card, index) => (
          <Col key={index} span={4}>
            <Card
              style={{ padding: '0.5rem 1rem,', width: '95%', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  <img style={{ width: '35px', marginTop:'0.5rem' }} src={card.image} alt="Logo" />
                  <div style={{ color: 'black', fontWeight: '700' }}>{card.title}</div>
                </div>
              }
              actions={[
            <Button
              key="add"
              type="primary"
              icon={<PlusOutlined />}
              style={{ float: 'right', marginRight: '2px', background: '#00007c' }}
              size="small"
            >
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
              // style={{ width: '60%', padding: '0.5rem 1rem,' }}
              style={{ padding: '0.5rem 1rem,', width: '95%', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  <img style={{ width: '35px', marginTop:'0.5rem' }} src={card.image} alt="Logo" />
                  <div style={{ color: 'black', fontWeight: '700' }}>{card.title}</div>
                </div>
              }
              actions={[
                <Button
                key="add"
                type="primary"
                icon={<PlusOutlined />}
                style={{ float: 'right', marginRight: '2px', background: '#00007c' }}
                size="small"
              >
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