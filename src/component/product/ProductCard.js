import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const ProductCard = props => {
  const { product } = props;
  const { title, price, picture } = product;
  console.log('productData: ', product);
  return (
    <>
      <Row xs={12} lg={12}>
        <Col lg={4}>
          <img src={picture} alt=''></img>
        </Col>
        <Col lg={8}>
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
