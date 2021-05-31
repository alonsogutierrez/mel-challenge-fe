import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const ProductCard = props => {
  const { product } = props;
  const { title, price, picture } = product;
  const productCardStyle = {
    display: 'flex',
    width: '100px',
    height: '100px'
  };

  const handleProductDetail = e => {
    e.preventDefault();
  };

  return (
    <>
      <Row onClick={e => handleProductDetail(e)}>
        <Col xs={4}>
          <img src={picture} style={productCardStyle} alt=''></img>
        </Col>
        <Col xs={8}>
          <h2>$ {price.amount}</h2>
          <h4>{title}</h4>
        </Col>
      </Row>
    </>
  );
};

export default ProductCard;

ProductCard.defaultProps = {
  product: {}
};

ProductCard.propTypes = {
  product: PropTypes.object
};
