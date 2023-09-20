import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Buscar = () => {
  return (
    <View style={styles.contenedorBuscar}>
      <View style={styles.inputContenedor}>
        <AntDesign name="search1" size={24} color="black" style={styles.iconoBuscar} />
        <TextInput
            style={styles.inputBuscar}
            placeholder='Busca información o alguna hortaliza'
            underlineColorAndroid="transparent"
        />
      </View>
    </View>
  )
}

export default Buscar;

const styles = StyleSheet.create({
  contenedorBuscar: {
    width: "100%",
    alignItems: "center",
    marginTop: 25
  },
  inputContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white", // Cambiado a blanco
    width: "90%",
    borderRadius: 25,
    shadowColor: 'grey', 
    shadowOffset: { width: 0, height: 6 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 2, 
  },
  iconoBuscar: {
    paddingLeft: 10,
  },
  inputBuscar: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 25,
    borderColor: 'white', // Establece el color del borde en blanco
    color:"grey"
    
  }
});
