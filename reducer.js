import { combineReducers } from "redux";
import Places from "./reducer/places.reducer";
import Weather from "./reducer/weather.reducer";

const Reducer = combineReducers({
  places: Places,
  weather: Weather
});
export default Reducer;
