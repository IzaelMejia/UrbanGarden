import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { colors } from '../Global/colors';

const Users = [
  { username: 'jacky', password: '12345678' },
  { username: 'luis', password: '12345678' },
  { username: 'will', password: '12345678' },
];


const LoginScreen = () => {
  const [username, setUsername] = useState(''); // Estado para el nombre de usuario
  const [password, setPassword] = useState(''); // Estado para la contraseña

  const navigation = useNavigation(); // Obtén el objeto de navegación

  const handleLogin = () => {
    // Verificar las credenciales del usuario
    const user = Users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Usuario autenticado correctamente, redirige a la pantalla Home
      navigation.navigate('Home');
    } else {
      // Muestra un mensaje de error si las credenciales son incorrectas
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.contenedorGeneralLogin}>
      <Image
        source={require('../img/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.containerInputs}>
        <View style={styles.inputContainer}>
          <FontAwesome5
            name="user-circle"
            size={24}
            color={colors.verdeFuete}
            style={styles.icon}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Usuario"
            placeholderTextColor={colors.verdeFuete}
            value={username} // Asigna el valor del estado
            onChangeText={(text) => setUsername(text)} // Actualiza el estado
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="lock"
            size={24}
            color={colors.verdeFuete}
            style={styles.icon}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Contraseña"
            secureTextEntry={true}
            placeholderTextColor={colors.verdeFuete}
            value={password} // Asigna el valor del estado
            onChangeText={(text) => setPassword(text)} // Actualiza el estado
          />
        </View>
        <View style={styles.textoLoginRegistrar}>
          <Text style={styles.textoRegistro1}>No tienes Cuenta? </Text>
          <Pressable>
            <Text style={styles.textoRegistro2}>Regístrate!</Text>
          </Pressable>
        </View>
        <View style={styles.contenedorBoton}>
          <Pressable style={styles.botonLogin} onPress={handleLogin}>
            <Text style={styles.textoBoton}>Vamos</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  contenedorGeneralLogin: {
    flex: 1,
    backgroundColor: colors.verdeFuete,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: 150,
  },
  containerInputs: {
    width: '100%',
    alignItems: 'center',
    marginTop: '5%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginTop: 20,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  inputs: {
    flex: 1,
    height: 50,
    fontSize: 18,
    color: '#2c8615',
  },
  textoLoginRegistrar: {
    marginTop: 10,
    width: '80%',
    flexDirection: 'row',
  },
  textoRegistro1: {
    color: colors.verdeClaro,
    fontSize: 18,
  },
  textoRegistro2: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  contenedorBoton: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  botonLogin: {
    width: '50%',
    borderRadius: 14,
    backgroundColor: colors.verdeClaro,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  textoBoton: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
});
