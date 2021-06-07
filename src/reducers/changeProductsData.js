import SET_CHANGE_PRODUCTS from '../types/setChangeProducts';

const initState = {
  changeProductsData: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_CHANGE_PRODUCTS:
      return { ...state, productsData: action.payload.changeProductsData };
    default:
      return state;
  }
};
