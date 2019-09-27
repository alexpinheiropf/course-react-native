import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

class Jobs extends Component {
  render() {
    let img = {
      uri: 'https://sujeitoprogramador.com/steve.png'
    };
    return(
      <Image source={img} style={{
        width: parseInt(this.props.largura), 
        height: parseInt(this.props.altura)
      }} />
    );
  }
}

export default class App extends Component{
  render() {
    let nome = 'Alex';
    return (
      <View>
        <Text>Olá!</Text>
        <Text>Tudo bem!</Text>
        <Text>Tudo e Você?</Text>
        <Text style={{fontSize:25, color: 'red', margin: 20}}>Tudo e Ótimo!</Text>
        
        <Jobs largura='500' altura='150'/>
        
        <Text>{nome}</Text>
      </View>
    );
  }
}