import * as constants from "../constants/whether.constants";
const initialState = {
  isLoading: false,
  isLoaded: false,
  weather: null,
  error: null
};

const Weather = (state = initialState, { type, payload } = actions) => {
  switch (type) {
    case constants.LOAD_WEATHER_REQUEST:
      return { ...state, isLoading: true, isLoaded: false };
    case constants.LOAD_WEATHER_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isLoaded: true, weather: payload };
    case constants.LOAD_WEATHER_REQUEST_FAIL:
      return { ...state, isLoading: false, isLoaded: false, error: payload };
    default:
      return state;
  }
};
export default Weather;
