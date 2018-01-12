import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';


//imagens 
const logo = require('../imagens/logo.png');
const jogar = require('../imagens/botao_jogar.png');
const sobreJogo = require('../imagens/sobre_jogo.png');
const outrosJogos = require('../imagens/outros_jogos.png');

export default class CenaPrincipal extends Component{
    render() {
        return (
            <View style = {{ backgroundColor: '#61BD8C', flex: 1 }}>
                <Image style = { styles.logo } source = { logo } />
                <Image source = { jogar } />
                <Image style = { styles.jogos } source = { sobreJogo } />
                <Image style = { styles.jogos } source = { outrosJogos } />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    logo: {
        justifyContent: 'center'
    },

    jogos: {
        flexDirection: 'row',
    }


})