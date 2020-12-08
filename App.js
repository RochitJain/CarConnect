import React from "react";
import { View } from "react-native";
import RochitSer from "./Screen/RochitService";
import AbhishekUser from "./Screen/AbhishekUser";
import AbhishekUserCar from "./Screen/AbhishekUserCar";
import IOTHUBService from "./Screen/IOTHUBService";
function App() {
  return (
    <View>
      <AbhishekUser />
      <RochitSer />
      <IOTHUBService />
      <AbhishekUserCar />
    </View>
  );
}

export default App;
