import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
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
      dataSource: [{key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'}]
    }
  }
  render() {
    return(
    <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={{padding:20,borderWidth:1}}>{item.key}</Text>}
        />
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
