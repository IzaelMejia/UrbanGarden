import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../Global/colors';

const ExploraImg = () => {
  return (
    <View style={styles.contenedorExploraImg}>
      <View style={styles.contenedorImg}>
        <Image
          source={require('../img/exploraImg/vegetales1.jpg')}
          style={styles.imgVegetales}
        />
        <View style={styles.textoSuperior}>
          <Text style={styles.textoNuevo}>Nuevo</Text>
          
        </View>
        <View style={styles.textoSuperior2}>
          <Image
          source={require('../img/exploraImg/guardar.png')}
          style={styles.iconoGuardar}
        />
        </View>
        <View style={styles.contenedorTextoInferior}>
        <View style={styles.contenedorImagen}>
            <View style={styles.fondoTipoHortaliza1}>
              <Text style={styles.tipoHortaliza}>Articulos Top</Text>
            </View>
            <View style={styles.fondoDescripcionHortaliza}>
              <Text style={styles.descripcionHortaliza}>
                Las Hortalizas más fáciles de cultivar
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* ------------------------------------------ */}
      <View style={styles.contenedorImg}>
        <Image
          source={require('../img/exploraImg/vegetales3.jpg')}
          style={styles.imgVegetales}
        />
        <View style={styles.textoSuperior}>
          <Text style={styles.textoNuevo}>Nuevo</Text>
          
        </View>
        <View style={styles.textoSuperior2}>
          <Image
          source={require('../img/exploraImg/guardar.png')}
          style={styles.iconoGuardar}
        />
        </View>
        <View style={styles.contenedorTextoInferior}>
          <View style={styles.contenedorImagen}>
            <View style={styles.fondoTipoHortaliza}>
              <Text style={styles.tipoHortaliza}>Temporada</Text>
            </View>
            <View style={styles.fondoDescripcionHortaliza}>
              <Text style={styles.descripcionHortaliza}>
                Hortalizas de Enero   
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>

    
  );
};

export default ExploraImg;

const styles = StyleSheet.create({
  contenedorExploraImg: {
    alignItems:"center",
  },
  contenedorImg: {
    height: 270,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    position: 'relative', 
  
  },
  iconoGuardar:{
    position: 'absolute',
    top: 0,
    right: 0,
    width: 32,
    height: 32,
  
  },
  contenedorImagen:{
    width: '100%',
  },
  imgVegetales: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 25,
  },
  textoSuperior: {
    position: 'absolute',
    top: 25, 
    left: 10, 
    backgroundColor: colors.rosita, 
    padding: 5,
    borderRadius: 10,
  },
  textoSuperior2:{
    position: 'absolute',
    top: 25,
    right: 20,
  },
  textoNuevo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blanco,
  },
  contenedorTextoInferior: {
    position: 'absolute',
    bottom: 10, 
    left: 10, 
    flexDirection: 'column',
    gap:5,
    marginBottom:10,
    
  },
  fondoTipoHortaliza1:{
    backgroundColor: colors.verdeExplorar, 
    padding: 5,
    borderRadius: 5,
    marginRight: 10, 
    width: '35%',
    marginBottom:10
  },
  fondoTipoHortaliza: {
    backgroundColor: colors.verdeExplorar, 
    padding: 5,
    borderRadius: 5,
    marginRight: 10, 
    width: '52%',
    marginBottom:10
  
  },
  
  tipoHortaliza: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.blanco,
    
  },
  descripcionHortaliza: {
    fontSize: 18,
    color: colors.blanco,
    fontWeight:"600",
    
    
  },
});