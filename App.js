import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ViewA from './Components/ViewA';
import ViewB from './Components/ViewB';



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
      dataSource: [{key: 'Devin'},
      {key: 'Jackson'}]
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
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(so1) => {
        console.log(so1)
        this.setState({so1})
      }}
      value={this.state.so1}
      />
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(so2) => this.setState({so2})}
      value={this.state.so2}
      />
      {/* <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => <Text style={{padding:20,borderWidth:1}}>{item.key}</Text>}
      /> */}
      <TouchableOpacity style={styles.plus} onPress={this.clickPlus()}>
        <Text> Cong </Text>
      </TouchableOpacity>
      <Text>{this.state.result}</Text>
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
