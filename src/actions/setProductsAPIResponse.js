import SET_PRODUCTS_API_RESPONSE from '../types/setProductsAPIResponse';

export default productsAPIResponseData => dispatch => {
  dispatch({
    type: SET_PRODUCTS_API_RESPONSE,
    payload: {
      productsAPIResponseData
    }
  });
};
