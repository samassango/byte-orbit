import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

import Reducer from "./reducer";

const ConfigureStore = () => {
  const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
  const store = createStore(
    persistReducer({ key: "root", storage: AsyncStorage }, Reducer),
    composeEnhancers(applyMiddleware(thunk))
  );
  persistStore(store);
  return store;
};

export default ConfigureStore;
