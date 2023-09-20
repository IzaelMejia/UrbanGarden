import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Global/colors';
import { MaterialCommunityIcons as Corona } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ExploraImg from '../Components/ExploraImg';

const DATA = [
    {
      id: '1',
      title: 'Paso a paso',
    },
    {
      id: '2',
      title: 'Populares',
    },
    {
      id: '3',
      title: 'Temporada',
    },
    {
      id: '4',
      title: 'Fáciles',
    }
    ,
    {
      id: '5',
      title: 'Sensores',
    }
    ,
    {
      id: '6',
      title: 'Plantas',
    }
  ];

const Explora = ({ navigation }) => {

  return (
    <View style={styles.contetedorEplora}>
      <View style={styles.contenedorInicioExplora}>
        <Text style={styles.textoTituloExplora  }>Explora</Text>
          <View style={styles.contenedorIconosExplora}>
            <Corona name="crown" size={35} color={colors.verdeFuete} 
                    style={styles.logoPremium}/>
                    <Ionicons name="save" size={30} color={colors.verdeFuete}  />
          </View>
      </View>
      <View style={styles.contenedorExploraList}>
        <View style={styles.contenedorExploraFlat}>
          <FlatList
              data={DATA}
              style={styles.listas}
              horizontal={true}
              showsVerticalScrollIndicator={false}
               showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.wrapper}
              renderItem={({ item }) => {
                  return (
                      <View style={styles.contenedorFlatList}>
                        <Text
                          style={styles.textoListas}
                        >{item.title}</Text>
                      </View>
                  )
              }}
          />
          </View>
        </View>
        <ExploraImg/>
    </View>
  )
}

export default Explora

const styles = StyleSheet.create({
    contetedorEplora:{
      flex:1,
        backgroundColor:colors.blancoVerde,
    
    },
    contenedorInicioExplora:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:20
    },
    contenedorIconosExplora:{
      flexDirection:"row",
      marginRight:20
    },
    textoTituloExplora:{
      fontSize:20,
      marginLeft:25,
      fontWeight:"bold",
      color:colors.gris
    },
    contenedorExploraList:{
      alignItems:"center",
    },
    contenedorExploraFlat:{
      width:"90%",
      
    },
    contenedorFlatList:{
        backgroundColor:colors.verdeFlatList,
        width:100,
        borderRadius:12,
        padding:10,
    },
    listas:{
        marginTop:10,
        
    },
    textoListas:{
        fontSize:12,
        textAlign:"center",
        
    },
    wrapper:{
      gap:15
    },

    

})