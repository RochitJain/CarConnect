import React, { Component, useState } from "react";
import { View, Button, Text } from "react-native";
import axios from "axios";

//const [articles, setArticles] = useState([]);

export default class RochitServ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carData: [],
    };
    // this.GetHandler = this.GetHandler.bind(this);

    // console.log(this.state);
  }
  GetHandler = () => {
    axios
      .get("http://localhost:80/connect/obddata")
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // this.setState({ carData: response });
        console.log(this);
        // console.log(_this);

        console.log(this.state.carData);
      })

      .catch(function (error) {
        alert(error.message);
      });
  };

  render() {
    return (
      <View style={{ padding: 20 }}>
        <View style={{ width: 200 }}></View>
        <View style={({ padding: 30 }, { width: 200 })}>
          <Button onPress={this.GetHandler} title="Get Req" />
        </View>
      </View>
    );
  }
}
