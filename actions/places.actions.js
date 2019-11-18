import * as constants from "../constants/places.constants";
import * as api from "../helpers/api";
import data from "../data/places";
import uuidv4 from "uuid/v4";

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
    // fetch(api.placesApi)
    // fetch("../data/places/places.json")
    new Promise((resolve, reject) => {
      resolve(data);
    })
      //Promise.all(data)
      //   .then(res => res.json())
      .then(response => {
        const results = response.results;
        results.forEach(d => (d.key_id = uuidv4()));
        console.log("data", results);
        dispatch(loadPlacesSuccess(results));
      })
      .catch(error => dispatch(loadPlacesFail(error)))
  );
};

export const removeLocation = payload => {
  return { type: constants.LOAD_PLACES_REMOVE_REQUEST, payload };
};

export const createLocation = locationInfo => {
  return { type: constants.LOAD_CREATE_NEW_LOCATION, payload: locationInfo };
};
