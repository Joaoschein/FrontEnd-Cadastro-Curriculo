import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../services/api'; // API configurada para comunicação com o backend

export default function TelaCadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [enderecoWeb, setEnderecoWeb] = useState('');
  const [experiencia, setExperiencia] = useState('');

  const handleSubmit = () => {
    const novoCurriculo = { nome, email, telefone, enderecoWeb, experiencia };
    api.post('', novoCurriculo)
      .then(() => {
        Alert.alert('Sucesso', 'Currículo cadastrado com sucesso');
        navigation.goBack();  // Volta para a tela anterior
      })
      .catch(error => {
        Alert.alert('Erro', 'Não foi possível cadastrar o currículo');
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Novo Currículo</Text>

      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>E-mail:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text>Telefone:</Text>
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />

      <Text>Endereço Web:</Text>
      <TextInput style={styles.input} value={enderecoWeb} onChangeText={setEnderecoWeb} />

      <Text>Experiência Profissional:</Text>
      <TextInput style={styles.input} value={experiencia} onChangeText={setExperiencia} />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
