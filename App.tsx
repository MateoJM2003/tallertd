import React from 'react';
import { StyleSheet, View } from 'react-native';
import IniciarSesion from './src/screens/IniciarSesion';
import { PaginaRegistro } from './src/screens/PaginaRegistro';

 export const App=() => {
  return (
    <View style={styles.container}>
      <IniciarSesion/>
      {/*<PaginaRegistro>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App; 

