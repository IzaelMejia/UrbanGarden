import { Platform, SafeAreaView, StatusBar, StyleSheet, View, } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home"
import Sensores from '../Screens/Sensores';
import LoginScreen from '../Screens/LoginScreen';
import Explora from '../Screens/Explora';
import { colors } from '../Global/colors';

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <SafeAreaView style={styles.contenedroPlataforma}>
      <Tab.Navigator 
        screenOptions={{ headerShown: false 
        }}
      >
        <Tab.Screen 
          name="Login" // Nombre de la ruta de inicio de sesión
          component={LoginScreen} 
          options={{
            tabBarIcon:({focused})=>{
              return(
                <View>
                  <SimpleLineIcons  name="login" size={24} color={focused ? colors.naranjaFuerete: colors.verdeClaro} />
                </View>
              )
            }
          }} 
        />
        <Tab.Screen 
            name="Home" component={Home} 
            options={{
                tabBarIcon:({focused})=>{
                  return(
                    <View>
                      <Entypo name="home" size={24} color={focused ? colors.naranjaFuerete: colors.verdeClaro} />
                    </View>
                  )
                }
              }} 
            />
            

          <Tab.Screen 
            name="Sensores" component={Sensores} 
            options={{
                tabBarIcon:({focused})=>{
                  return(
                    <View>
                      <MaterialCommunityIcons name="shield-sun" size={24} color={focused ? colors.naranjaFuerete: colors.verdeClaro} />
                    </View>
                  )
                }
              }} 
            />
            
            <Tab.Screen 
            name="Explora" component={Explora} 
            options={{
                tabBarIcon:({focused})=>{
                  return(
                    <View>
                      <Fontisto name="world" size={24} color={focused ? colors.naranjaFuerete: colors.verdeClaro} />
                    </View>
                  )
                }
              }} 
            />
      </Tab.Navigator>
      </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
  contenedroPlataforma:{
    flex:1,
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:0
  },
  
})