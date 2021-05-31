import SET_IS_LOADING from '../types/setIsLoading';

const initState = {
  isLoading: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
};
