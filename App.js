import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { Provider } from "react-redux";
import AppContainer from "./AppNavigation";
import storeConfigure from "./storeConfigure";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    loadFont();
  }, []);
  async function loadFont() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    setIsReady(true);
  }
  const handleNavigationChange = navigation => {
    console.log(navigation);
  };

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <Provider store={storeConfigure()}>
      <AppContainer
        onNavigationStateChange={handleNavigationChange}
        uriPrefix="/app"
      />
    </Provider>
  );
}
