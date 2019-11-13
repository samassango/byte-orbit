import React from "react";
import AppContainer from "./AppNavigation";
export default function App() {
  const handleNavigationChange = navigation => {
    console.log(navigation);
  };
  return (
    <AppContainer
      onNavigationStateChange={handleNavigationChange}
      uriPrefix="/app"
    />
  );
}
