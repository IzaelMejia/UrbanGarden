import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const CardsTareas = () => {
  return (
    <View style={styles.contenedorCardTareas}>
      <View style={styles.cardsTareas}>
        <View style={styles.cardTarea1}>
            <View style={styles.contenedorTareaIcono}>
                <MaterialCommunityIcons 
                    name="clock-time-four" size={40} color={colors.naranjaFuerete} />
            </View>
            <View style={styles.contenedorTareaTexto}>
                <Text style={styles.textoTarea1}>Recordatorios</Text>
                <Text style={styles.textoTarea2}>No olvides revisar tu   hortaliza</Text>
            </View>
        </View>

        <View style={styles.cardTarea2}>
           <View style={styles.contenedorTareaIcono}>
                <Fontisto name="camera" size={30} color={colors.blanco} /> 
            </View>
            <View style={styles.contenedorTareaTexto}>
                <Text style={styles.textoTarea3}>Tomar Fotos</Text>
                <Text style={styles.textoTarea4}>Captura tu hortaliza para guardar el proceso</Text>
            </View>
        </View>

      </View>

      <View style={styles.cardsTareas}>
        <View style={styles.cardTarea2}>
            <View style={styles.contenedorTareaIcono}>
            <MaterialCommunityIcons name="mushroom" size={38} color={colors.blanco} /> 
                </View>
                <View style={styles.contenedorTareaTexto}>
                    <Text style={styles.textoTarea3}>Mushrooms</Text>
                    <Text style={styles.textoTarea4}>Recogninse mushrooms</Text>
                </View>
        </View>

        <View style={styles.cardTarea1}>
            <View style={styles.contenedorTareaIcono}>
                <MaterialCommunityIcons 
                    name="clock-time-four" size={40} color={colors.naranjaFuerete} />
            </View>
            <View style={styles.contenedorTareaTexto}>
                <Text style={styles.textoTarea1}>Reminders</Text>
                <Text style={styles.textoTarea2}>No olvides revisar tu   hortaliza</Text>
            </View>
        </View> 



      </View>


    </View>
  )
}

export default CardsTareas

const styles = StyleSheet.create({
    contenedorCardTareas:{
    },
    cardsTareas:{
        flexDirection:"row",
        justifyContent: "space-evenly",
        marginTop:35
    },
    cardTarea1:{
        width:170,
        height:170 ,
        backgroundColor:colors.blanco,
        borderRadius:14,
        shadowColor: 'grey', 
        shadowOffset: { width: 6, height: 6 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 2, 
    },

    cardTarea2:{
        width:170,
        height:170 ,
        backgroundColor:colors.naranjaFuerete,
        borderRadius: 14,
        shadowColor: 'grey', 
        shadowOffset: { width: 6, height: 6 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 2, 
    },
    contenedorTareaIcono:{
        height:"60%",
        padding:15
    },
    contenedorTareaTexto:{
        height:"40%",
        paddingLeft:10
    },
    textoTarea1:{
        color:colors.verdeCardTexto,
        fontSize:20,
        fontWeight:600
    },
    textoTarea2:{
        color:colors.gris,
        fontSize:12
    },
    textoTarea3:{
        color:colors.blanco,
        fontSize:20,
        fontWeight:600
    },
    textoTarea4:{
        color:colors.blanco,
        fontSize:12
    }

})