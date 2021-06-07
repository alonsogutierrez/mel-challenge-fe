import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Col, Row } from 'reactstrap';

import BreadCrumb from '../../breadcrumb';
import SEO from '../../seo';
import ProductCard from './../../product/ProductCard';
import ProductsAPI from '../../../common/ProductsAPI';

import setCategories from '../../../actions/setCategories';
import setUbication from '../../../actions/setUbication';
import setProducts from '../../../actions/setProducts';
import setChangeProducts from '../../../actions/setChangeProducts';
import setIsLoading from '../../../actions/setIsLoading';

const ProductList = props => {
  useEffect(() => {
    const {
      ubication,
      products,
      changeProducts,
      setChangeProducts,
      setCategories,
      setProducts,
      setUbication,
      location
    } = props;
    if (!products || products.length === 0) {
      const query = queryString.parse(location.search);
      const textToSearch = query.query;
      async function getProductsData(text) {
        try {
          const productsAPIResponse = await ProductsAPI.getProductsByText(text);
          console.log('productsAPIResponse ****: ', productsAPIResponse);
          setIsLoading(true);
          setCategories(productsAPIResponse.categories);
          if (ubication !== productsAPIResponse.ubication) {
            setUbication(productsAPIResponse.ubication);
          }
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

  const { products, isLoading, categories, ubication } = props;

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
  const productsListContainerStyle = {
    height: 'max-content',
    width: '100%',
    paddingTop: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    backgroundColor: '#EEEEEEEE',
    paddingBottom: '40px'
  };
  const productColumnStyle = {
    backgroundColor: 'white'
  };
  let categoriesList = '';
  if (categories.length > 0) {
    categoriesList = categories.join(' > ');
  }

  return (
    <>
      {categories.length > 0 && (
        <SEO
          title={'Busqueda de productos'}
          description={categoriesList}
          pathSlug={`/items?q=`}
          keywords={['Busqueda', 'productos', 'Mercado Libre']}
        />
      )}
      <div style={{ height: '100vh' }}>
        <BreadCrumb categories={categoriesList} />
        <div style={productsListContainerStyle}>
          {products.map((product, index) => (
            <Row key={index}>
              <Col lg={1}></Col>
              <Col lg={10} style={productColumnStyle}>
                <ProductCard product={product} ubication={ubication} />
              </Col>
              <Col lg={1}></Col>
            </Row>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoadingReducer.isLoading,
  categories: state.categoriesReducer.categoriesData,
  ubication: state.ubicationReducer.ubicationData,
  products: state.productsReducer.productsData,
  changeProducts: state.changeProductsReducer.changeProductsData,
  productsAPIResponse: state.productsAPIResponseReducer.productsAPIResponseData
});

const mapDispatchToProps = dispatch => ({
  setCategories: categories => dispatch(setCategories(categories)),
  setUbication: ubication => dispatch(setUbication(ubication)),
  setProducts: products => dispatch(setProducts(products)),
  setChangeProducts: changeProducts =>
    dispatch(setChangeProducts(changeProducts))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

ProductList.defaultProps = {
  location: {},
  products: [],
  ubication: '',
  setCategories: () => {},
  setUbication: () => {},
  setProducts: () => {},
  setChangeProducts: () => {},
  changeProducts: false,
  isLoading: false
};

ProductList.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
  ubication: PropTypes.string,
  setCategories: PropTypes.func,
  setUbication: PropTypes.func,
  setProducts: PropTypes.func,
  setChangeProducts: PropTypes.func,
  changeProducts: PropTypes.bool,
  isLoading: PropTypes.bool
};
