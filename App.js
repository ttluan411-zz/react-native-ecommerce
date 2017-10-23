import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ViewA from './Components/ViewA';
import ViewB from './Components/ViewB';



const SimpleApp = StackNavigator({
  Home: { screen: ViewA },
  Shop: { screen: ViewB }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
