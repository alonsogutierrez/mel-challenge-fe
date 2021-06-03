import { combineReducers } from 'redux';

import categoriesData from './categoriesData';
import ubicationData from './ubicationData';
import productsData from './productsData';
import productsAPIResponseData from './productAPIResponseData';
import changeProductsData from './changeProductsData';
import isLoading from './isLoading';

export const rootReducer = combineReducers({
  productsReducer: productsData,
  ubicationReducer: ubicationData,
  changeProductsReducer: changeProductsData,
  isLoadingReducer: isLoading,
  productsAPIResponseReducer: productsAPIResponseData,
  categoriesReducer: categoriesData
});
