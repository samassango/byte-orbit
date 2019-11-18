import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
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
const CaptureStack = createStackNavigator({
  AddLocation: {
    screen: AddLocation,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#6e4cad",
        color: "#E0E4E3"
      },
      headerLeft: (
        <Ionicon
          style={{ paddingTop: 1, color: "#E0E4E3" }}
          name="md-arrow-back"
          onPress={() => {
            navigation.navigate("Location");
          }}
          size={25}
        />
      )
    })
  },
  EditLocation: {
    screen: EditLocation,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#6e4cad",
        color: "#E0E4E3"
      },
      headerLeft: (
        <Ionicon
          style={{ paddingTop: 1, color: "#E0E4E3" }}
          name="md-arrow-back"
          onPress={() => {
            navigation.navigate("Location");
          }}
          size={25}
        />
      )
    })
  }
});

const stack = createStackNavigator({
  Home: {
    screen: MatBottomTap,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#6e4cad",
        color: "#E0E4E3"
      },
      headerRight: (
        <EntypoIcon
          style={{ paddingRight: 10, color: "#E0E4E3" }}
          name="add-to-list"
          onPress={() => {
            navigation.navigate("AddLocation");
          }}
          size={25}
        />
      )
    })
  }
});
const switchStack = createSwitchNavigator({
  home: {
    screen: stack
  },
  Capture: {
    screen: CaptureStack
  }
});
const AppContainer = createAppContainer(switchStack);
export default AppContainer;
