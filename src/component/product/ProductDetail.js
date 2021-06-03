import React from 'react';

const ProductDetail = () => {
  const productsListContainerStyle = {
    height: 'max-content',
    width: '100%',
    paddingTop: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    backgroundColor: '#EEEEEEEE',
    paddingBottom: '40px'
  };
  return (
    <>
      <div style={productsListContainerStyle}>
        <Row>
          <Col lg={9}></Col>
          <Col lg={9}></Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetail;
