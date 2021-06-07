import SET_IS_LOADING from '../types/setIsLoading';

export default isLoading => dispatch => {
  dispatch({
    type: SET_IS_LOADING,
    payload: {
      isLoading
    }
  });
};
