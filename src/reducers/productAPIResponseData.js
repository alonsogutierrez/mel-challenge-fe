import SET_PRODUCTS_API_RESPONSE from '../types/setProductsAPIResponse';

const initState = {
  productsAPIResponseData: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_API_RESPONSE:
      return {
        ...state,
        productsAPIResponseData: action.payload.productsAPIResponseData
      };
    default:
      return state;
  }
};
