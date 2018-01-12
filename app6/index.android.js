import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

//import cenas 
import CenaPrincipal from './src/components/CenaPrincipal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';

export default class app6 extends Component {
  render() {
    return (
      <View style = {{ flex: 1 }}>
        <CenaPrincipal />       
      </View>
    );
  }
}

AppRegistry.registerComponent('app6', () => app6);
