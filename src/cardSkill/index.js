


import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col } from 'antd';
import {
  imagenDeGit,
  imagenDeAtom,
  imagenDeJs,
  imagenDePhy,
  imagenDeC,
  imagenDeMy,
  imagenAws,
  imagenDeMy as imagenAzure,
  imagenApache,
  imagenSsl,
  imagenDeWordpress,
  imagenDeResearch,
} from '../constante/imagen';

const { Meta } = Card;

const CardArray = ({ searchData, onCardAdded }) => {
  const [filteredCards, setFilteredCards] = useState([]);

  const cardData = [
    { title: 'GitHub', image: imagenDeGit.IMAGENICON },
    { title: '', image: imagenDeAtom.IMAGENICON },
    { title: 'JavaScript', image: imagenDeJs.IMAGENICON },
    { title: 'Phyton', image: imagenDePhy.IMAGENICON },
    { title: 'C#', image: imagenDeC.IMAGENICON },
    { title: 'My SQL', image: imagenDeMy.IMAGENICON },
    { title: 'AWS', image: imagenAws.IMAGENICON },
    { title: 'Azure', image: imagenAzure.IMAGENICON },
    { title: 'Apache', image: imagenApache.IMAGENICON },
    { title: 'SSL', image: imagenSsl.IMAGENICON },
    { title: 'Wordpress', image: imagenDeWordpress.IMAGENICON },
    { title: 'Research', image: imagenDeResearch.IMAGENICON },
  ];

  useEffect(() => {
    setFilteredCards(searchData || cardData);
  }, [searchData]);

  const handleAddCard = (card) => {
    onCardAdded(card);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        {filteredCards.map((card, index) => (
          <Col
            key={index}
            xs={12}
            sm={12}
            md={8}
            lg={4}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              className="class_responsive"
              style={{
                padding: '0.5rem 0.5rem',
                textAlign: 'center',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                fontSize:'13px'
              }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  {card.image ? (
                    <img
                      style={{ width: '35px', marginTop: '0.5rem' }}
                      src={card.image}
                      alt="Logo"
                    />
                  ) : (
                    <img
                      style={{ width: '35px', marginTop: '0.5rem' }}
                      src="https://skillsat-dev.s3.eu-west-2.amazonaws.com/images/icon-1.png"
                      alt="Logo"
                    />
                  )}
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
                  style={{
                    float: 'right',
                    marginRight: '2px',
                    marginTop: '5px',
                    marginBottom: '0',
                    background: '#00007c',
                  }}
                  size="small"
                  onClick={() => handleAddCard(card)}
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

export default CardArray;