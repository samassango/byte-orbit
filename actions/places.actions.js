import * as constants from "../constants/places.constants";
import * as api from "../helpers/api";

export const loadPlacesRequest = () => ({
  type: constants.LOAD_PLACES_REQUEST
});

export const loadPlacesSuccess = payload => ({
  type: constants.LOAD_PLACES_REQUEST_SUCCESS,
  payload
});

export const loadPlacesFail = payload => ({
  type: constants.LOAD_PLACES_REQUEST_FAIL,
  payload
});

export const loadAllPlaces = () => dispatch => {
  dispatch(loadPlacesRequest());
  return (
    fetch(api.placesApi)
      // return fetch("../data/places/places.json")
      .then(res => res.json())
      .then(response => {
        console.log("data", response);
        dispatch(loadPlacesSuccess(response.results));
      })
      .catch(error => dispatch(loadPlacesFail(error)))
  );
};
