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

const detalheContato = require('../imagens/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
        <View style = {{ backgroundColor: '#FFF', flex: 1 }}>
            <StatusBar 
                //hidden = { true }
                backgroundColor = '#61BD8C' />
            <BarraNavegacao voltar navigator = { this.props.navigator } corDeFundo = '#61BD8C' />   
           
            <View style = { styles.cabecalho }>
                <Image source = { detalheContato }/>
                <Text  style = { styles.titulo }> Contatos </Text>
            </View>
            <View style = { styles.divDetalhes }>
                <Text style = { styles.txtDetalhes } > TEL: (11) 1234-1234</Text>
                <Text style = { styles.txtDetalhes } > CEL: (11) 91234-1234 </Text>
                <Text style = { styles.txtDetalhes } > EMAIL: contato_atmconsultoria.com </Text>
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
        marginLeft: 10,
        fontSize: 30,
        marginTop: 25,
        //fontWeight: 'bold',
        color: '#61BD8C' 
    },

    divDetalhes: {
        marginTop: 20,
        marginLeft: 20
    },

    txtDetalhes: {
        fontSize: 18
    }
})
