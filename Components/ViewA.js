import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class ViewA extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Profile"
        onPress={() => navigate('Shop',{name:'Logan'})}
      />
    )

  }
}
