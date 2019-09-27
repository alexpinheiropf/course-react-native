import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class App extends Component{

  render() {
    return (
      <View>
        <Text style={styles.textoPrincipal}> Eu sou o texto 1</Text>
        <Text style={styles.textoColor}> Eu sou o texto 2</Text>
        <Text style={[styles.textoColor, styles.subTexto]}> Eu sou o texto 3</Text>
        <Text style={[styles.textoPrincipal, styles.textoColor]}> Eu sou o texto 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    textoPrincipal:{
      fontSize: 27,
      textAlign: 'center'
    },
    textoColor:{
      color:'red'
    },
    subTexto:{
      textAlign: 'right'
    }
});