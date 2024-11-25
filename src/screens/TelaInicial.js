import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Currículos</Text>
      <Button title="Listar Currículos" onPress={() => navigation.navigate('TelaListagem')} />
      <Button title="Cadastrar Novo Currículo" onPress={() => navigation.navigate('TelaCadastro')} />
      <Button title="Consultar Currículo" onPress={() => navigation.navigate('TelaConsulta')}  // Altere o 'exemplo_id' para o ID real
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});