import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BreadCrumb from '../../breadcrumb';
import ProductDetail from '../../product/ProductDetail';

import ProductsAPI from '../../../common/ProductsAPI';

const ProductDetailPage = props => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    const {
      match: {
        params: { id }
      }
    } = props;
    async function getProductDataById(id) {
      try {
        setIsLoading(true);
        const productAPIResponse = await ProductsAPI.getProductById(id);
        setProduct(productAPIResponse.item);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    }
    getProductDataById(id);
  }, [product.id]);

  let { categories } = props;
  if (categories.length > 0) {
    categories = categories.join(' > ');
  }

  return (
    <>
      <div style={{ height: '100vh' }}>
        <BreadCrumb categories={categories} />
        {product.id && <ProductDetail product={product} />}
        {!product.id && <div>Loading...</div>}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  categories: state.categoriesReducer.categoriesData
});

export default connect(mapStateToProps, {})(ProductDetailPage);

ProductDetailPage.defaultProps = {
  categories: [],
  location: {},
  match: {}
};

ProductDetailPage.propTypes = {
  categories: PropTypes.array,
  location: PropTypes.object,
  match: PropTypes.object
};
