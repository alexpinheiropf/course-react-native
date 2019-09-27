import React, {Component} from 'react';
import { View, Text } from 'react-native';
export default class App extends Component{

  render() {
    return (
      <View style={{flex: 1}}>

      <View style={{flex:1, backgroundColor: 'green'}}></View>
      <View style={{flex:1, backgroundColor: 'yellow'}}></View>
      <View style={{flex:2, backgroundColor: 'blue'}}></View>

      </View>
    );
  }
}