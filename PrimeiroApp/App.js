import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

class Botao extends Component{
  constructor(props){
    super(props);
    this.state ={};

    this.styles = StyleSheet.create({
      botao: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: props.cor,
        borderRadius: 25
      },
      btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: props.cor
      }
    });
  }
  render(){
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.eventoBotao}>
        <View style={this.styles.btnArea}>
          <Text style={this.styles.btnTexto}>{this.props.nome}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class App extends Component{
constructor (props){
  super(props);
  this.state = {
    textoFrase: ''
  };

  this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

  this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
  'O riso é a menor distância entre duas pessoas.', 
  'Deixe de lado as preocupações e seja feliz.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.'];
}

  quebrarBiscoito(){
    let state = this.state;

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    // Recebendo o numero da frase proporcional a posição no array
    state.textoFrase =' " ' + this.frases[numeroAleatorio] + ' "';

    this.setState(state)
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={require('./src/biscoito.png')} style={styles.img}/>

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        
       <Botao cor="#dd7b22" nome="Abrir Biscoito" eventoBotao={this.quebrarBiscoito}/>

       {/* <Botao cor="#000000" nome="Sair do App"/> */}
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
    fontStyle: 'italic'
  }
});