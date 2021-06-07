import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';

const ProductCard = props => {
  const { product, ubication } = props;
  console.log('productData: ', product);
  const { id, title, price, picture, free_shipping } = product;

  const containerRowStyle = {
    borderBottom: '2px solid #EEEEEE',
    justifyContent: 'center'
  };

  const productImgCardStyle = {
    display: 'flex',
    width: '180px',
    height: '180px',
    marginTop: '16px',
    marginBottom: '16px',
    padding: '0px'
  };

  const productStyleColumnData = {
    paddingTop: '30px',
    paddingLeft: '16px'
  };

  const freeShippingImgStyle = {
    marginTop: '5px',
    marginLeft: '10px',
    width: '18px',
    height: '18px'
  };

  const handleProductDetail = e => {
    e.preventDefault();
    console.log('clicked');
    props.history.push(`/items/${id}`);
  };

  const formatProductPrice = amount => {
    return amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <>
      <Container
        onClick={e => handleProductDetail(e)}
        style={{ cursor: 'pointer' }}>
        <Row style={containerRowStyle} onClick={e => handleProductDetail(e)}>
          <Col lg={3}>
            <img src={picture} style={productImgCardStyle} alt=''></img>
          </Col>
          <Col lg={7} style={productStyleColumnData}>
            <div style={{ display: 'flex' }}>
              <h4>$ {formatProductPrice(price.amount)}</h4>
              {free_shipping && (
                <img
                  style={freeShippingImgStyle}
                  src={'/assets/ic_shipping.png'}></img>
              )}
            </div>
            <p style={{ paddingTop: '30px', paddingLeft: '0px' }}>{title}</p>
          </Col>
          <Col lg={2}>
            <p style={{ paddingTop: '40px', paddingLeft: '0px' }}>
              {ubication}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(ProductCard);

ProductCard.defaultProps = {
  product: {},
  ubication: '',
  history: {}
};

ProductCard.propTypes = {
  product: PropTypes.object,
  ubication: PropTypes.string,
  history: PropTypes.object
};
