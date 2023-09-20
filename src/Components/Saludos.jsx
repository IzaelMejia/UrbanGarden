import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { colors } from '../Global/colors';


const Saludos = () => {
  return (
    <View style={styles.contenedorSaludo}>
        <FontAwesome name="user-circle-o" size={40} color={colors.verdeClaro}
            style={styles.iconoSaludo}/>
        <Pressable style={styles.saludoPressable}>
            <View style={styles.contenedorSaludoTexto}>
                <Text style={styles.textoSaludo1}>Hola, Buen día, Jacky!</Text>
                <Text style={styles.textoSaludo2}>Presiona aquí para ver tu información personal</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default Saludos

const styles = StyleSheet.create({
    contenedorSaludo:{
        flexDirection:"row",
        marginTop:20,
        marginLeft:30,
        width:"100%"

    },
    contenedorSaludoTexto:{
        flexDirection:"column"
    },
    saludoPressable:{
        marginLeft:8
    },
    iconoSaludo:{
        marginRight:10
    },
    textoSaludo1:{
        fontSize:20,
        fontWeight:600
    },

    textoSaludo2:{
        fontSize:11,
        color:"grey"
    }

})