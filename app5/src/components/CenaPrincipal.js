import React, { Component } from 'react';
import {
  StatusBar,
  View, 
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

//importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imagens/logo.png');
const menuCliente = require('../imagens/menu_cliente.png');
const menuContato = require('../imagens/menu_contato.png');
const menuEmpresa = require('../imagens/menu_empresa.png');
const menuServico = require('../imagens/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View style = {{ backgroundColor: '#FFF', flex: 1 }}>
            <StatusBar 
                //hidden = { true }
                backgroundColor = '#CCC' />
            <BarraNavegacao />   
            
            <View style = { styles.logo }>
                <Image source = { logo } />
            </View> 

            <View style = { styles.menu }>
                <View style = { styles.menuGrupo }>

                    <TouchableHighlight
                        underlayColor= { 'transparent' }
                        activeOpacity = {0.3}
                        onPress = {() => {
                            this.props.navigator.push({ id: 'cliente' });
                        }}>
                        <Image style = { styles.imgMenu } source = { menuCliente } />
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor= {'transparent'}
                        activeOpacity = {0.3}
                        onPress = {() => {
                            this.props.navigator.push({ id: 'contato' });
                    }}>
                        <Image style = { styles.imgMenu } source = { menuContato } />
                    </TouchableHighlight>

                </View>

                <View style = { styles.menuGrupo }>

                    <TouchableHighlight
                        underlayColor= {'transparent'}
                        activeOpacity = {0.3}
                        onPress = {() => {
                            this.props.navigator.push({ id: 'empresa' });
                        }}>
                        <Image style = { styles.imgMenu } source = { menuEmpresa } />
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        underlayColor= {'transparent'}
                        activeOpacity = {0.3}
                        onPress = {() => {
                            this.props.navigator.push({ id: 'servico' });
                        }}>
                        <Image style = { styles.imgMenu } source = { menuServico } />
                    </TouchableHighlight>

                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },

    menu: {
        alignItems: 'center'
    },

    menuGrupo: {
        flexDirection: 'row',
    },

    imgMenu: {
        margin: 15
    }
})