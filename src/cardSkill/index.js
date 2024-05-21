import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col } from 'antd';
import { imagenDeIcon, imagenDeGit, imagenDeAtom, imagenDeJs, imagenDePhy, imagenDeC, imagenDeMy, imagenAws, imagenSsl, imagenApache, imagenDeResearch, imagenDeWordpress } from '../constante/imagen';

const { Meta } = Card;

const CardArray = ({ searchData, onCardAdded }) => {
  console.log('lo paso', searchData);

  const cardData = [
    { title: 'GitHub ', image: imagenDeGit.IMAGENICON },
    { title: '', image: imagenDeAtom.IMAGENICON },
    { title: 'JavaScript ', image: imagenDeJs.IMAGENICON },
    { title: 'Phyton ', image: imagenDePhy.IMAGENICON },
    { title: 'C# ', image: imagenDeC.IMAGENICON },
    { title: 'My SQL ', image: imagenDeMy.IMAGENICON },
    { title: 'AWS ', image: imagenAws.IMAGENICON },
    { title: 'Azure ', image: imagenDeMy.IMAGENICON },
    { title: 'Apache ', image: imagenApache.IMAGENICON },
    { title: 'SSL', image: imagenSsl.IMAGENICON },
    { title: 'Wordpress ', image: imagenDeWordpress.IMAGENICON },
    { title: 'Research ', image: imagenDeResearch.IMAGENICON },
  ];

  const [filteredCards, setFilteredCards] = useState(searchData || cardData);

  const handleAddCard = (card) => {
    onCardAdded(card);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        {filteredCards.map((card, index) => (
          <Col key={index} span={4}>
            <Card
              style={{ width: '95%', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  <img style={{ width: '35px', marginTop: '0.5rem' }} src={card.image} alt="Logo" />
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