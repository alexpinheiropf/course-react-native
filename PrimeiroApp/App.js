import React, {Component} from 'react';
import { View, Text } from 'react-native';
export default class App extends Component{

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

      <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>

      </View>
    );
  }
}