import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      pizza: ''
    };
    var pizzas = ['Frango com Catupiry', 'Calabresa', 'Strogonoff', 'Brigadeiro', 'Quatro Queijos'];
    
    setInterval(() => {
      this.setState(previousState => {
        var n = Math.floor(Math.random() * pizzas.length );//Gerado o número a partir da quantidade do array

        return{pizza: pizzas[n]}//Pega o state e colocar o valor gerado no array
      });
    }, 1000);//Tempo de execução
    
  }

  render() {
    return (
      <View >
        <Text style={{textAlign: 'center', 
                      fontSize:27, 
                      fontWeight: 'bold', 
                      color: 'red'}}> Menu de Pizzas</Text>
        <Text style={{textAlign: 'center',
                      fontSize: 23,
                      color: '#000000'}}>{this.state.pizza}</Text>
        

      </View>
    );
  }
}