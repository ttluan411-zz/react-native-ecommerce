import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ViewA from './Components/ViewA';
import ViewB from './Components/ViewB';

StatusBar.setHidden(true);


const SimpleApp = StackNavigator({
  Home: { screen: ViewA },
  Shop: { screen: ViewB }
});

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      so1:"",
      so2:"",
      text: 'placeholder',
      result: '...',
      // dataSource: [{key: 'Devin'},
      // {key: 'Jackson'}]
    }
  }
  clickPlus(){
    fetch("http://localhost:8080/WebService01/Sum.php", {
      method:"POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        "numberOne":this.state.so1,
        "numberTwo":this.state.so2
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        result:responseJson.result
      })
    })
    .catch((error)=>{console.log(error)})
  }
  render() {
    return(
    <View style={styles.wrapper}>
    </View>

  );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  plus: {
    backgroundColor:'green'
  }
});
