import SET_UBICATION from '../types/setUbication';

export default ubicationData => dispatch => {
  dispatch({
    type: SET_UBICATION,
    payload: {
      ubicationData
    }
  });
};
