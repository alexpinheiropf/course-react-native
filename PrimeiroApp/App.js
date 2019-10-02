import React, {Component} from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';
export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      texto: '',
      textoInput: ''
    };
    this.enviar = this.enviar.bind(this);

  }

  enviar(){
    let state = this.state;
    state.texto = 'Bem-vindo ' + state.textoInput;
    alert(state.texto)

    this.setState(state);
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} 
                    placeholder="Digite seu nome..." 
                    underlineColorAndroid="transparent" 
                    onChangeText={(textoInput=> this.setState({textoInput}))}/>

        <Button title="Aperte" onPress={this.enviar}/>  
        
        <Text style={styles.text}>{this.state.texto}</Text>   
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
    fontSize: 23,
    color: '#000000',
    marginTop: 15

  }
});