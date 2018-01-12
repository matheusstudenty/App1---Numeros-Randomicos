import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import BarraNavegacao from './src/components/BarraNavegacao';
//importar o componente barra navegação
import CenaClientes from './src/components/CenaClientes';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServico from './src/components/CenaServico';

export default class app5 extends Component {
  render() {
    return (
        <Navigator 
          initialRoute = {{ id: 'principal' }}
          renderScene = {(route, navigator) => {
            // definir a cena com base na rota
            
            switch (route.id){
              case 'principal':
                return(
                  <CenaPrincipal navigator = { navigator }  />
                );

              case 'cliente':
                return(
                  <CenaClientes navigator = { navigator } />
                );

              case 'contato':
                return(
                  <CenaContatos navigator = { navigator } />
                );

              case 'empresa':
                return(
                  <CenaEmpresa navigator = { navigator } />
                );

              case 'servico':
                return(
                  <CenaServico navigator = { navigator } />
                );

              default:
                return false;
            }
          }}
        />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
