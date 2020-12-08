import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `maity-iot`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const params = JSON.stringify({
  carno: "OD02F7496",
  ownerno: "OD006",
  maker: "A!",
  model: "M1",
  color: "Blackiw",
  rcexp: "2021-11-27T04:10:32.555+00:00",
  totalkms: 0,
  fuel: 0.0,
  enginestatus: 0,
  coolentstatus: 0,
});
const PostHandler = () => {
  axios
    .post("http://localhost:441/addcar", params, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);
    })

    .catch(function (error) {
      console.log(error);
    });
};
const GetHandler = () => {
  axios
    .get("http://localhost:441/viewallcars")
    .then(function (response) {
      // handle success
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {});
};
export default class RochitServ extends React.Component {
  render() {
    return (
      <View style={{ padding: 20 }}>
        <View style={({ padding: 30 }, { width: 200 })}>
          <Button onPress={GetHandler} title="Get Req For AbhishekUserCar" />
          <Button onPress={PostHandler} title="POst" />
        </View>
      </View>
    );
  }
}
