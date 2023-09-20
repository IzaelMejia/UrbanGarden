import { StyleSheet, View, Pressable, Text } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'



const ButtonLogin = () => {
  return (
    <View style={styles.contenedorBoton}>
      <Pressable style={styles.botonLogin}>
        <Text style={styles.textoBoton}>Vamos</Text>
      </Pressable>
    </View>
  )
}

export default ButtonLogin

const styles = StyleSheet.create({
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
})