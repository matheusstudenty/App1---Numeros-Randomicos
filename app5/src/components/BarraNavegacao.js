import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

//importar o componente barra navegação
const btnVoltar = require('../imagens/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar) {
        return (
            <View style = { [styles.barraTitulo, { backgroundColor: this.props.corDeFundo }] }> 
                <TouchableHighlight 
                    underlayColor= { 'transparent' }
                    activeOpacity = {0.3}
                    onPress = {() => {
                        this.props.navigator.pop();
                    }}>
                    <Image source = { btnVoltar } /> 
                </TouchableHighlight>
                <Text style = { styles.txtBarraTitulo }> ATM Consultoria </Text>
            </View>
        );
    }

    return (
        <View style = { styles.barraTitulo }>  
            <Text style = { styles.txtBarraTitulo }> ATM Consultoria </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    barraTitulo: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },

    txtBarraTitulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }

})
