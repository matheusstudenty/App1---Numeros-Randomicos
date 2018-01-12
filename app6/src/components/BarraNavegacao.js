import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class BarraNavegação extends Component {
    render() {
        return (
            <View style = { styles.barraTitulo }>
                <Text style = { styles.txtBarraTitulo }> Cara ou Coroa </Text>
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
