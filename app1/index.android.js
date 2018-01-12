import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const gerarNumeroAleatorio = () =>{
  
    var min = Math.ceil(0);
    var max = Math.floor(100);
    var numero = Math.floor(Math.random() * (max - min)) + min;
    
    alert('Seu número randômico é: ' + numero);
  }

  const App = () => {
    
      return (
        <View>
          <Text>Gerador de números randômicos </Text>
          <Button 
            title="Gerar um número randômico"
            onPress={gerarNumeroAleatorio}
          />
        </View>
      ); 
    };

AppRegistry.registerComponent('app1', () => App);