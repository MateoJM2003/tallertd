import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';

const IniciarSesion: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');





  
  return (
     <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Tienda Deportiva</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Ingrese Nombre de usuario: {username}</Text>
          <Text style={styles.infoText}>Ingrese Contraseña: {password}</Text>
        </View>
      </View> 
      </View> 

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  innerContainer: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom:75,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
});

export default IniciarSesion;