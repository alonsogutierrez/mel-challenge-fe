import SET_PRODUCTS from '../types/setProducts';

export default productsData => dispatch => {
  dispatch({
    type: SET_PRODUCTS,
    payload: {
      productsData
    }
  });
};
