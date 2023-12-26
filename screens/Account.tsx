// Account.js
import React from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { Appbar, Button } from "react-native-paper";
import AccountCard from "../components/AccountCard";

const Account = () => {


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/car-background2.png')}
        resizeMode="cover" 
        style={styles.background}
      >
      
      </ImageBackground>

      <View style={styles.content}>
        <AccountCard />
        {/* Coloca el botón de cerrar sesión dentro de la vista de contenido para que no esté al final */}
        <Button 
          style={styles.logoutButton} 
          mode="contained"
          icon="logout"
          onPress={() => {/* lógica para cerrar sesión */}}
        >
          Cerrar Sesión
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd", // Color de fondo general azul claro
  },
  background: {
    width: '100%',
    height: 200,
  },
  transparent: {
    backgroundColor: 'transparent',
    elevation: 0, // Elimina sombras en Android
  },
  appbarTitle: {
    color: '#ffffff',
  },
  content: {
    flex: 1,
    backgroundColor: '#e3f2fd', // Continúa con el color de fondo general
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20, // Espacio superior dentro del contenido
  },
  logoutButton: {
    borderRadius: 10,
    backgroundColor: '#d9534f', // Mantenemos el rojo para el botón de cerrar sesión por consistencia
    margin: 25, // Agrega margen alrededor del botón
    // Si necesitas que el botón esté más arriba, reduce el marginTop o elimínalo
  },
});

export default Account;
