import * as constants from "../constants/whether.constants";
import * as api from "../helpers/api";
export const loadWeatherRequest = () => ({
  type: constants.LOAD_WEATHER_REQUEST
});

export const loadWeatherSuccess = payload => ({
  type: constants.LOAD_WEATHER_REQUEST_SUCCESS,
  payload
});

export const loadWeatherFail = payload => ({
  type: constants.LOAD_WEATHER_REQUEST_FAIL,
  payload
});

export const loadAllWeather = () => dispatch => {
  dispatch(loadWeatherRequest());
  return (
    fetch(api.whetherApi)
      //return fetch(api.wapi)
      .then(res => res.json())
      .then(response => {
        console.log("resp", response);
        dispatch(loadWeatherSuccess(response));
      })
      .catch(error => dispatch(loadWeatherFail(error)))
  );
};
