import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';


const Clima = () => {
  return (
    <View style={styles.contendeorClima}>
        
      <View style={styles.contenedorTextoClima}>
        <MaterialIcons name="arrow-drop-up" size={24} color="black" />
        <View style={styles.contenedorTextoClima2}>
            <Text style={styles.climaLugar}>Pachuca, Hidalgo</Text>
            <Text style={styles.climaGrados}>22 C</Text>
        </View>
      </View>
      <View style={styles.climaIcono}>
      <Image
            source={require('../img/sensoresImg/sensor-clima.png')}
            style={styles.imgSensorClima}
            resizeMode="contain"
          />
      </View>
    </View>
  )
}

export default Clima

const styles = StyleSheet.create({
    contendeorClima:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,

    },
    contenedorTextoClima:{
        marginLeft:25,
        flexDirection:'row'

    },
    contenedorTextoClima2:{
        flexDirection:'column'

    },
    climaLugar:{
        fontSize:18,
        color:colors.verdeFuete

    },
    climaGrados:{
        color:"grey",
        fontSize:12,

    },
    climaIcono:{
        marginRight:40,
    },
    imgSensorClima:{
      width:55,
      height:55
    },
})