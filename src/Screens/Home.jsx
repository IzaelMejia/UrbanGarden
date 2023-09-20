import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import Clima from '../Components/Clima'
import Saludos from '../Components/Saludos'
import Premium from '../Components/Premium'
import Buscar from '../Components/Buscar'
import CardsTareas from '../Components/CardsTareas'


const Home = ({ navigation }) => {
  return (
    <View style={styles.contendeorHome}>
      <Clima/>
      <Saludos/>
      <Premium/>
      <Buscar/>
      <CardsTareas/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  contendeorHome:{
    flex:1,
    backgroundColor:colors.verdePistache
  }
    
})