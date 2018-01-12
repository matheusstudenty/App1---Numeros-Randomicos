import React, { Component } from 'react';
import {
  StatusBar,
  View, 
  Image,
  Text,
  StyleSheet
} from 'react-native';

//importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imagens/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
        <View style = {{ backgroundColor: '#FFF', flex: 1 }}>
            <StatusBar 
                //hidden = { true }
                backgroundColor = '#EC7148' />
            <BarraNavegacao voltar navigator = { this.props.navigator } corDeFundo = '#EC7148' />   
           
            <View style = { styles.cabecalho }>
                <Image source = { detalheEmpresa }/>
                <Text  style = { styles.titulo }> A Empresa </Text>
            </View>
            <View style = { styles.divDetalhes }>
                <Text style = { styles.txtDetalhes } > A ATM Consultoria esta no mercado a mais de 20 anos...</Text>
            </View>  
        </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },

    titulo: {
        marginLeft: 20,
        fontSize: 30,
        marginTop: 30,
        //fontWeight: 'bold',
        color: '#EC7148' 
    },

    divDetalhes: {
        marginTop: 30,
        marginLeft: 20
    },

    txtDetalhes: {
        fontSize: 20,
    }
})
