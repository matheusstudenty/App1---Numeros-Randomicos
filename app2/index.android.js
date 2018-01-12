
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

//formatações
const Estilos = {
  Principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
   Botao: {
     backgroundColor: '#538530',
     paddingVertical: 10,
     paddingHorizontal: 40,
     marginTop: 20
   },
 
   TextBotao: {
     color: '#fff',
     fontSize: 16,
     fontWeight: 'bold'
   }
 
 };
 
 const GerarNovaFrase = () => {
 
   var numeroAleatorio = Math.random();
   numeroAleatorio = Math.floor(numeroAleatorio * 16);
 
   var frases = Array();
   frases[0] = 'Estou sempre alegre. Essa é a melhor maneira de resolver os problemas da vida.';
   frases[1] = 'O tempo dura bastante para aqueles que sabem aproveitá-lo.';
   frases[2] = 'Se você encontrar um caminho sem obstáculos, ele provalvelmente não leva a lugar nenhum.';
   frases[3] = 'Não existe um caminho para a felicidade. A felicidade é o caminho.';
   frases[4] = 'Você nunca sabe a força que tem, até que a sua única alternativa é ser forte.';
   frases[5] = 'Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz.';
   frases[6] = 'Não importa o que você decidiu. O que importa é que isso te faça feliz.'
   frases[7] = 'Algumas vezes coisas ruins acontecem em nossas vidas para nos colocar na direção das melhores coisas que poderíamos viver.'
   frases[8] = 'Se a vida não ficar mais fácil, trate de ficar mais forte.'
   frases[9] = 'Se a caminhada está difícil, é porque você está no caminho certo.'
   frases[10] = 'Toda conquista começa com a decisão de tentar.'
   frases[11] = 'Insista, persista e nunca desista.'
   frases[12] = 'Vai. E se der medo, vai com medo mesmo.'
   frases[13] = 'Quando algo ruim acontece você tem três escolhas: deixar isso definir você, deixar isso destruir você ou fazer isso te deixar mais forte.'
   frases[14] = 'Imagine uma nova história para sua vida e acredite nela.'
   frases[15] = 'Se não puder fazer tudo, faça tudo que puder.'
 
 
 
   var fraseEscolhida = frases[numeroAleatorio];
 
   Alert.alert(
   'Frase do dia:',
   fraseEscolhida,
   [
     {text: 'OK', onPress: () => console.log('OK Pressed')},
   ]
 );
 }

//criar componentes
const App = () => {
  
    const { Principal, Botao, TextBotao } = Estilos
      
      return (
        <View style={ Principal }>
          <Image source={ require('./imagens/logo.png')} />
          
          <TouchableOpacity 
          onPress={ GerarNovaFrase } style={ Botao } >
            <Text style={ TextBotao }> Nova frase </Text>
          </TouchableOpacity>
        
        </View>
      );
  };


AppRegistry.registerComponent('app2', () => App);
