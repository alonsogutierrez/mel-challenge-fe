import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import ProductCard from './../../product/ProductCard';
import ProductsAPI from '../../../common/ProductsAPI';

const ProductList = props => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('useEFFECT');
    const { location } = props;
    const queryParams = queryString.parse(location.search);
    const text = queryParams.query;
    async function getProductsData(input) {
      const productsAPIResponse = await ProductsAPI.getProductsByText(input);
      console.log('productsAPIResponse: ', productsAPIResponse);
      setProducts(productsAPIResponse.items);
      setLoading(false);
    }
    getProductsData(text);
  }, [false]);

  if (loading) {
    return (
      <>
        <h1>Cargando datos...</h1>
      </>
    );
  }

  if (products && products.length > 0) {
    console.log('productss!: ', products);

    return (
      <>
        <div>
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h3>No hay productos encontrados para tu búsqueda</h3>
    </>
  );
};

export default ProductList;

ProductList.defaultProps = {
  location: {}
};

ProductList.propTypes = {
  location: PropTypes.object
};
