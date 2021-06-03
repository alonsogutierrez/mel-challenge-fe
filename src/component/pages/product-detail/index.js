import React from 'react';

import BreadCrumb from '../../breadcrumb';
import ProductDetail from '../../product/ProductDetail';

const productDetailPage = () => {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <BreadCrumb categories={'categories'} />
        <ProductDetail />
      </div>
    </>
  );
};

export default productDetailPage;
