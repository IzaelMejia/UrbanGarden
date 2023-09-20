import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/Navigation/Navigator';
import { AuthProvider } from './src/Screens/AuthContext';
import LoginScreen from './src/Screens/LoginScreen';

export default function App() {
  return (
    <NavigationContainer>
        <Navigator />
     </NavigationContainer>
  );
}
