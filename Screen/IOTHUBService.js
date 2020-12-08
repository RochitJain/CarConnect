import React from "react";
import axios from "axios";
import { Button, View } from "react-native";

const GetTripData = () => {
  axios
    .get("http://localhost:80/senddata/trip")
    .then(function (response) {
      // handle success
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {});
};

const GetVehicleData = () => {
  axios
    .get("http://localhost:80/senddata/vcondition")
    .then(function (response) {
      // handle success
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {});
};
const GetEmission = () => {
  axios
    .get("http://localhost:80/senddata/econdition")
    .then(function (response) {
      // handle success
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {});
};
export default class RochitServ extends React.Component {
  render() {
    return (
      <View style={{ padding: 200 }}>
        <View style={({ padding: 30 }, { width: 200 })}>
          <Button onPress={GetEmission} title="Get Car Emission Data" />
          <Button onPress={GetVehicleData} title="Get Car Vehicle Data" />
          <Button onPress={GetTripData} title="Get Car Trip Data" />
        </View>
      </View>
    );
  }
}
