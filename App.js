import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
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
      text: 'placeholder',
      dataSource: [{key: 'Devin'},
      {key: 'Jackson'}]
    }
  }
  render() {
    return(
    <View style={styles.wrapper}>
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
    />
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={{padding:20,borderWidth:1}}>{item.key}</Text>}
        />
      </View>
  );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow'
  }
});
