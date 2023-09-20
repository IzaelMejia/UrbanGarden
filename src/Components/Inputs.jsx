import React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../Global/colors';


const Users = [
  { username: 'jaky', password: '12345678' },
  { username: 'luis', password: '12345678' },
  { username: 'will', password: '12345678' },
];

const Inputs = () => {

  return (
    <View style={styles.containerInputs}>
        
      <View style={styles.inputContainer}>
        <FontAwesome5 name="user-circle" size={24} color={colors.verdeFuete} style={styles.icon} />
        <TextInput
          style={styles.inputs}
          placeholder='Usuario'
          placeholderTextColor={colors.verdeFuete} 
        ></TextInput>

      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color={colors.verdeFuete} style={styles.icon} />
        <TextInput
          style={styles.inputs}
          placeholder='Contraseña'
          secureTextEntry={true}
          placeholderTextColor={colors.verdeFuete} 
        ></TextInput>

      </View>
      <View style={styles.textoLoginRegistrar}>
        <Text style={styles.textoRegistro1}>No tienes Cuenta? </Text>
        <Pressable>
          <Text style={styles.textoRegistro2}>Registrate!</Text>
        </Pressable>
      </View>

      <View style={styles.contenedorBoton}>
      <Pressable style={styles.botonLogin}>
        <Text style={styles.textoBoton}>Vamos</Text>
      </Pressable>
    </View>

      
      
    </View>


  )
}
// #2c8615   - Verde fondo 
// #7be54d   - Verde boton (claro)
export default Inputs;

const styles = StyleSheet.create({
  containerInputs: {
    width: "100%",
    alignItems: "center",
    marginTop:"5%"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginTop: 20,
    paddingLeft: 10, // Espacio a la izquierda del icono
  },
  icon: {
    marginRight: 10,
  },
  inputs: {
    flex: 1,
    height: 50,
    fontSize: 18,
    color: "#2c8615",
  },
  textoLoginRegistrar:{
    marginTop:10,
    width:"80%",
    flexDirection:'row'
  },

  textoRegistro1:{
    color:colors.verdeClaro,
    fontSize:18
  },
  textoRegistro2:{
    color:"#fff",
    fontSize:18,
    fontWeight:600
  },
  contenedorBoton:{
    marginTop:20,
    width:"100%",
    alignItems:"center"
},
botonLogin:{
    width: "50%",
    borderRadius:14,
    backgroundColor: colors.verdeClaro,
    justifyContent: "center",
    alignItems: "center",
    padding: 12
},
textoBoton:{
    fontSize:20,
    color:"#fff",
    fontWeight:600
}
});
