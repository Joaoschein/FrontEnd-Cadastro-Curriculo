import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import api from '../services/api'; // API configurada para comunicação com o backend

export default function TelaListagem({ navigation }) {
  const [curriculos, setCurriculos] = useState([]);

  useEffect(() => {
    api.get()  // Altere para a rota correta do backend
      .then(response => setCurriculos(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.nome}</Text>
      <Text>id: {item.id}</Text>
      <Text>telefone: {item.telefone}</Text>
      <Text>email: {item.email}</Text>
      <Text>endereco web:{item.enderecoWeb}</Text>
      <Text>experiencia profissional: {item.experiencia}</Text>


    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={curriculos}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
