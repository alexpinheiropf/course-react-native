import React, {Component} from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
    this.pegaNome = this.pegaNome.bind(this)
  }

  pegaNome(texto){
    let state = this.state;

    if(texto.length > 0){
      state.nome = 'Bem vindo ' + texto;
    }else{
      state.nome = '';
    }
    this.setState(state);
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nome?" 
        underlineColorAndroid="transparent" onChangeText={this.pegaNome}/>
        <Text style={styles.text}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 20,
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    color: '#000000'
  }
});