import SET_CATEGORIES from '../types/setCategories';

export default categoriesData => dispatch => {
  dispatch({
    type: SET_CATEGORIES,
    payload: {
      categoriesData
    }
  });
};
