import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import EntypoIcon from "@expo/vector-icons/Entypo";
import Ionicon from "@expo/vector-icons/Ionicons";

import Places from "./screens/places";
import Weather from "./screens/weather";
import AddLocation from "./screens/addLocation";
import EditLocation from "./screens/editLocation";

const MatBottomTap = createMaterialBottomTabNavigator(
  {
    Location: {
      screen: Places,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        tabBarIcon: (
          <EntypoIcon
            style={{ paddingTop: 1, color: "#E0E4E3" }}
            name="location"
            size={20}
          />
        )
      })
    },
    AddLocation: { screen: AddLocation },
    EditLocation: { screen: EditLocation },
    Weather: {
      screen: Weather,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        tabBarIcon: (
          <Ionicon
            style={{ paddingTop: 1, color: "#E0E4E3" }}
            name="md-cloudy"
            size={25}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Location",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" }
  }
);

const stack = createStackNavigator({
  Home: {
    screen: MatBottomTap,
    navigationOptions: ({ navigation }) => ({
      headerShown: false
    })
  }
});
const AppContainer = createAppContainer(stack);
export default AppContainer;
