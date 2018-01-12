import React, { Component } from 'react';
import {
  StatusBar,
  View, 
  Image,
  StyleSheet,
  Text
} from 'react-native';

//importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imagens/detalhe_cliente.png');
const Cliente1 = require('../imagens/cliente1.png');
const Cliente2 = require('../imagens/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
        <View style = {{ backgroundColor: '#FFF', flex: 1 }}>
            <StatusBar 
                //hidden = { true }
                backgroundColor = '#B9C941' />
            
                <BarraNavegacao voltar navigator = { this.props.navigator } corDeFundo = '#B9C941'/>   
            

            <View style = { styles.cabecalho }>
                <Image source = { detalheClientes } />
                <Text style = { styles.txtDetalhes } > Nossos Clientes</Text>
            </View>

            <View style = { styles.divClientes }>
                <Image source = { Cliente1 } />
                <Text style = { styles.txtClientes } > Lorem ipsun dolorem </Text>
            </View>

            <View style = { styles.divClientes }>
                <Image source = { Cliente2 } />
                <Text style = { styles.txtClientes } > Lorem ipsun dolorem </Text>
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

    divClientes: {
        padding: 20,
        marginTop: 20
    },

    txtDetalhes: {
        fontSize: 30,
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },

    txtClientes: {
        fontSize: 18,
        marginLeft: 20
    }
})