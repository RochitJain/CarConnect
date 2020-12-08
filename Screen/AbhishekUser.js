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
  drivingid: "OD006",
  name: "Rochit Jain",
  email: "R.jain@outlook.com",
  phoneno: "+1234566",
  password: "RochitAzure",
});
const PostHandler = () => {
  axios
    .post("http://localhost:444/user-signup", params, {
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
    .get("http://localhost:444/userviewall")
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
          <Button onPress={GetHandler} title="Get Req For AbhishekUser" />
          <Button onPress={PostHandler} title="Post" />
        </View>
      </View>
    );
  }
}
