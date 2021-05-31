import { combineReducers } from 'redux';

import productsData from './productsData';
import changeProductsData from './changeProductsData';
import isLoading from './isLoading';

export const rootReducer = combineReducers({
  productsReducer: productsData,
  changeProductsReducer: changeProductsData,
  isLoadingReducer: isLoading
});
