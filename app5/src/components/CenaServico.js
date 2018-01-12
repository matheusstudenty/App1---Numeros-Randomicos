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

const detalheContato = require('../imagens/detalhe_servico.png');

export default class CenaServico extends Component {
  render() {
    return (
        <View style = {{ backgroundColor: '#FFF', flex: 1 }}>
            <StatusBar 
                //hidden = { true }
                backgroundColor = '#19D1C8' />
            <BarraNavegacao voltar navigator = { this.props.navigator } corDeFundo = '#19D1C8'/>   
           
            <View style = { styles.cabecalho }>
                <Image source = { detalheContato }/>
                <Text  style = { styles.titulo }> Nossos Serviços </Text>
            </View>
            <View style = { styles.divDetalhes }>
                <Text style = { styles.txtDetalhes } > - Consultoria </Text>
                <Text style = { styles.txtDetalhes } > - Processos </Text>
                <Text style = { styles.txtDetalhes } > - Acompanhamento de Projetos </Text>
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
        color: '#19D1C8' 
    },

    divDetalhes: {
        marginTop: 30,
        marginLeft: 20
    },

    txtDetalhes: {
        fontSize: 20
    }
})
