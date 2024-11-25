import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../services/api'; // Configuração do Axios para o backend

export default function TelaConsulta() {
  const [id, setId] = useState(''); // ID digitado pelo usuário
  const [curriculo, setCurriculo] = useState(null); // Dados do currículo retornados pela API

  // Função para consultar o currículo com base no ID
  const consultarCurriculo = () => {
    if (!id) {
      Alert.alert('Erro', 'Por favor, insira um ID válido.');
      return;
    }

    api.get(`${id}`) // Rota para buscar o currículo pelo ID
      .then((response) => {
        setCurriculo(response.data);
      })
      .catch((error) => {
        Alert.alert('Erro', 'Não foi possível encontrar o currículo.');
        console.error(error);
        setCurriculo(null); // Limpa os dados em caso de erro
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Currículo</Text>

      {/* Campo para inserir o ID */}
      <TextInput
        style={styles.input}
        placeholder="Digite o ID do currículo"
        value={id}
        onChangeText={setId} // Atualiza o estado com o ID digitado
      />

      {/* Botão para realizar a consulta */}
      <Button title="Consultar" onPress={consultarCurriculo} />

      {/* Exibe os dados do currículo, se disponíveis */}
      {curriculo && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Detalhes do Currículo</Text>
          <Text>Nome: {curriculo.nome}</Text>
          <Text>E-mail: {curriculo.email}</Text>
          <Text>Telefone: {curriculo.telefone || 'Não informado'}</Text>
          <Text>Endereço Web: {curriculo.enderecoWeb || 'Não informado'}</Text>
          <Text>Experiência Profissional: {curriculo.experiencia}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
