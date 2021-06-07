import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

const BreadCrumb = props => {
  const { categories } = props;
  const productsListContainerStyle = {
    height: 'max-content',
    width: '100%',
    paddingTop: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    backgroundColor: '#EEEEEEEE'
  };
  return (
    <>
      <div style={productsListContainerStyle}>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <p style={{ color: '#999999', marginBottom: '0px' }}>
              {categories}
            </p>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </div>
    </>
  );
};

export default BreadCrumb;

BreadCrumb.defaultProps = {
  categoriesList: ''
};

BreadCrumb.propTypes = {
  categoriesList: PropTypes.string
};
