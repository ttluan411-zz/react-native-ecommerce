import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ViewB extends Component {
  static navigationOptions = {
    title: 'Shop'
  };
  render() {
    return <Text>Hello, This is Shop Screne!</Text>;
  }
}
