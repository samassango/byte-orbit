import * as constants from "../constants/places.constants";
const initialState = {
  isLoading: false,
  isLoaded: false,
  places: null,
  error: null
};
const Places = (state = initialState, { type, payload } = actions) => {
  console.log(type);
  console.log(payload);
  switch (type) {
    case constants.LOAD_PLACES_REQUEST:
      return { ...state, isLoading: true, isLoaded: false };
    case constants.LOAD_PLACES_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isLoaded: true, places: payload };
    case constants.LOAD_PLACES_REQUEST_FAIL:
      return { ...state, isLoading: false, isLoaded: false, error: payload };
    default:
      return state;
  }
};
export default Places;
