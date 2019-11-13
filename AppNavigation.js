import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Places from "./screens/places";
import Whether from "./screens/whether";

const MatBottomTap = createMaterialBottomTabNavigator(
  {
    Places: { screen: Places },
    Whether: { screen: Whether }
  },
  {
    initialRouteName: "Places",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" }
  }
);

const stack = createStackNavigator(MatBottomTap);
const AppContainer = createAppContainer(stack);
export default AppContainer;
