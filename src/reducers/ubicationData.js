import SET_UBICATION from '../types/setUbication';

const initState = {
  ubicationData: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_UBICATION:
      return { ...state, ubicationData: action.payload.ubicationData };
    default:
      return state;
  }
};
