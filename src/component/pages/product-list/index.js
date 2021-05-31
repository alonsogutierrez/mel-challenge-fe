import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Col, Row } from 'reactstrap';

import ProductCard from './../../product/ProductCard';
import setProducts from '../../../actions/setProducts';
import setChangeProducts from '../../../actions/setChangeProducts';
import ProductsAPI from '../../../common/ProductsAPI';
import setIsLoading from '../../../actions/setIsLoading';

const ProductList = props => {
  useEffect(() => {
    const {
      products,
      changeProducts,
      setChangeProducts,
      setProducts,
      location
    } = props;
    if (products && products.length > 0) {
      setProducts(products);
    } else {
      const query = queryString.parse(location.search);
      const textToSearch = query.query;
      async function getProductsData(text) {
        try {
          const productsAPIResponse = await ProductsAPI.getProductsByText(text);
          setIsLoading(true);
          setProducts(productsAPIResponse.items);
          setChangeProducts(!changeProducts);
          setIsLoading(false);
        } catch (err) {
          setChangeProducts(!changeProducts);
          setIsLoading(false);
        }
      }
      getProductsData(textToSearch);
    }
  }, [props.changeProducts, props.isLoading]);

  const { products, isLoading } = props;

  if (isLoading) {
    return (
      <>
        <h1>Cargando data...</h1>
      </>
    );
  }

  if (isLoading && products && products.length == 0) {
    return (
      <>
        <h1>No hay products encontrados</h1>
      </>
    );
  }
  return (
    <>
      <div>
        {products.map((product, index) => (
          <Row key={index}>
            <Col xs={3} key={index}></Col>
            <Col xs={6} key={index}>
              <ProductCard product={product} key={index} />
            </Col>
            <Col xs={3} key={index}></Col>
          </Row>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoadingReducer.isLoading,
  products: state.productsReducer.productsData,
  changeProducts: state.changeProductsReducer.changeProductsData
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products)),
  setChangeProducts: changeProducts =>
    dispatch(setChangeProducts(changeProducts))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

ProductList.defaultProps = {
  location: {},
  products: [],
  setProducts: () => {},
  setChangeProducts: () => {},
  changeProducts: false,
  isLoading: false
};

ProductList.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
  setProducts: PropTypes.func,
  setChangeProducts: PropTypes.func,
  changeProducts: PropTypes.bool,
  isLoading: PropTypes.bool
};
