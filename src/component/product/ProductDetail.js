import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, Button } from 'reactstrap';

const ProductDetail = props => {
  const productsListContainerStyle = {
    height: 'max-content',
    width: '100%',
    paddingTop: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    backgroundColor: '#EEEEEEEE',
    paddingBottom: '40px'
  };

  const productImgCardStyle = {
    display: 'flex',
    width: '680px',
    height: '680px',
    marginTop: '16px',
    marginBottom: '16px',
    padding: '0px'
  };

  const productStyleColumnData = {
    paddingTop: '32px',
    paddingLeft: '0px'
  };

  const shopButtonStyle = {
    width: '80%',
    marginLeft: '16px',
    backgroundColor: '#3483FA'
  };

  const { product } = props;
  const {
    condition,
    title,
    price,
    picture,
    sold_quantity,
    description
  } = product;

  return (
    <>
      <div style={productsListContainerStyle}>
        <Container>
          <Row style={{ backgroundColor: 'white' }}>
            <Col lg={8} style={{ paddingLeft: '32px' }}>
              <img src={picture} style={productImgCardStyle}></img>
              <h2>Descripción del producto</h2>
              <p>{description}</p>
            </Col>
            <Col lg={4} style={productStyleColumnData}>
              <Row>
                <p style={{ fontSize: '14px' }}>
                  {condition === 'new' ? 'Nuevo - ' : ''}
                  {sold_quantity} vendidos
                </p>
              </Row>
              <Row>
                <p style={{ fontSize: '24px' }}>{title}</p>
              </Row>
              <Row>
                <p style={{ fontSize: '46px' }}>$ {price.amount}</p>
              </Row>
              <Row>
                <Button style={shopButtonStyle}>Comprar</Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductDetail;

ProductDetail.defaultProps = {
  product: {}
};

ProductDetail.propTypes = {
  product: PropTypes.object
};
