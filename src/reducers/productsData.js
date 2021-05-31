import SET_PRODUCTS from '../types/setProducts';

const initState = {
  productsData: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, productsData: action.payload.productsData };
    default:
      return state;
  }
};
