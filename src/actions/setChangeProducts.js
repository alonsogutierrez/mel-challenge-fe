import SET_CHANGE_PRODUCTS from '../types/setChangeProducts';

export default changeProductsData => dispatch => {
  dispatch({
    type: SET_CHANGE_PRODUCTS,
    payload: {
      changeProductsData
    }
  });
};
