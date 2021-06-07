import SET_CATEGORIES from '../types/setCategories';

const initState = {
  categoriesData: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categoriesData: action.payload.categoriesData };
    default:
      return state;
  }
};
