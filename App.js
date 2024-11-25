import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/screens/TelaInicial';
import TelaListagem from './src/screens/TelaListagem';
import TelaCadastro from './src/screens/TelaCadastro';
import TelaConsulta from './src/screens/TelaConsulta';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaListagem" component={TelaListagem} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaConsulta" component={TelaConsulta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
