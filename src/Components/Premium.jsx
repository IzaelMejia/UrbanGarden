import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

import { FontAwesome5 as Corona} from '@expo/vector-icons'; 
import { colors } from '../Global/colors';

const Premium = () => {
  return (
    <View style={styles.pressablerPruebaPremium}>
        <Pressable style={styles.contenedorPruebaPremium}>
            <View style={styles.contenedorPremiumTexto}>
                <Text style={styles.textoPremium}>Prueba Urban Garden Premium </Text>
                <Corona name="crown" size={20} color="#fff" 
                    style={styles.logoPremium}/>
            </View>
       
            <View>
                <Text style={styles.textoPrueba}>15 días gratis </Text>
            </View>
        </Pressable>
    </View>
  )
}

export default Premium

const styles = StyleSheet.create({
    pressablerPruebaPremium:{
        marginTop:20,
        alignItems:"center"
    },
    contenedorPruebaPremium:{
        flexDirection:"column",
        backgroundColor:colors.verdeFuete,
        width:"90%",
        borderRadius:12,
        paddingVertical:20,
        
        
        
    },
    contenedorPremiumTexto:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:25

    },
    textoPremium:{
        color:"#fff",
        fontSize:15,
        
    },
    textoPrueba:{
        color:"#fff",
        fontSize:11,
        marginLeft:25
    },
    logoPremium:{
        marginLeft:10
    },

})