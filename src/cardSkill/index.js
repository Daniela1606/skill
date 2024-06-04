import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col } from 'antd';
import { imagenDeIcon, imagenDeGit, imagenDeAtom, imagenDeJs, imagenDePhy, imagenDeC, imagenDeMy, imagenAws, imagenSsl, imagenApache, imagenDeResearch, imagenDeWordpress } from '../constante/imagen';

const { Meta } = Card;

<<<<<<< HEAD
const CardArray = ({ searchData }) => {
=======
const CardArray = ({ searchData, onCardAdded }) => {
  console.log('lo paso', searchData);

>>>>>>> 259a04d28de0a48da15ffdc7f984f325697116b9
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

  console.log('filteredCards', filteredCards);
  useEffect(() => {
    setFilteredCards(searchData || cardData);
  }, [searchData]);

<<<<<<< HEAD
=======
  return (
    <div>
      <Row gutter={[16, 16]}>
        {filteredCards.map((card, index) => (
          <Col key={index} span={4}>
            <Card
              style={{
                padding: '0.5rem 0.5rem',
                textAlign: 'center',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
               
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              }}
              cover={
                <div style={{ textAlign: 'center' }}>
                  {card.image ?
                   <img style={{ width: '35px', marginTop: '0.5rem' }} src={card.image} alt="Logo" /> 
                  : <img style={{ width: '35px', marginTop: '0.5rem' }} src='https://skillsat-dev.s3.eu-west-2.amazonaws.com/images/icon-1.png' alt="Logo" /> 
                  }
                  <div style={{ color: 'black', fontWeight: '700' }}>{card.title}</div>
                </div>
              }
              actions={[
              <Button
                key="add"
                type="primary"
                icon={<PlusOutlined />}
                style={{ float: 'right', marginRight: '2px', marginTop: '5px', marginBottom: '0', background: '#00007c' }}
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
>>>>>>> 259a04d28de0a48da15ffdc7f984f325697116b9


    return (
      <div>
        <Row gutter={[16, 16]}>
          {searchData && Array.isArray(searchData) && searchData.map((card, index) => (

            <Col key={index} span={4}>
              <Card
                style={{
                  padding: '0.5rem 1rem',
                  width: '95%',
                  border: 'none',
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                }}
                cover={
                  <div style={{ textAlign: 'center' }}>
                    <img
                      style={{ width: '35px', marginTop: '0.5rem' }}
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
  
  export default CardArray;