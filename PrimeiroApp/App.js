import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component{
  render() {
    let nome = 'Alex';
    let img = {
      uri: 'https://sujeitoprogramador.com/steve.png'
    };
    return (
      <View>
        <Text>Olá!</Text>
        <Text>Tudo bem!</Text>
        <Text>Tudo e Você?</Text>
        <Text style={{fontSize:25, color: 'red', margin: 20}}>Tudo e Ótimo!</Text>

        <Image source={img} 
                style={{width:200, height: 200}} />
        <Text>{nome}</Text>
      </View>
    );
  }
}