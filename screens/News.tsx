// News.tsx
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Animated, Linking } from 'react-native';
import { IconButton } from 'react-native-paper';

const newsData = [
  {
    title: "Tendencias Emergentes en el Alquiler de Autos para 2024",
    description: "Exploramos las últimas innovaciones y tendencias en la industria del alquiler de autos...",
    image: require("../assets/News2.png"),
    date: "22-12-2023",
  },
  // Agrega aquí el resto de las noticias
];

const News = () => {
  const scaleValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const handleFacebookPress = () => {
    // Acción para abrir Facebook en el navegador o en la aplicación de Facebook.
    Linking.openURL('https://www.facebook.com/tu_pagina_de_facebook');
  };

  const handleTwitterPress = () => {
    // Acción para abrir Twitter en el navegador o en la aplicación de Twitter.
    Linking.openURL('https://twitter.com/tu_cuenta_de_twitter');
  };

  const handleInstagramPress = () => {
    // Acción para abrir Instagram en el navegador o en la aplicación de Instagram.
    Linking.openURL('https://www.instagram.com/tu_cuenta_de_instagram');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.socialMediaHeader}>NOTICIAS CLARCLIX!</Text>
      <View style={styles.container}>
        {newsData.map((news, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <Image source={news.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{news.title}</Text>
              <Text style={styles.description}>{news.description}</Text>
              <Text style={styles.date}>{news.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
        {/* Título de Redes Sociales */}
        <Text style={styles.socialMediaHeader}>Síguenos en nuestras redes sociales!</Text>
        {/* Sección de Botones de Redes Sociales */}
        <View style={styles.socialMediaButtons}>
          <IconButton
            icon="facebook"
            iconColor="#3b5998" // Color de Facebook
            size={30}
            onPress={handleFacebookPress} // Agregamos la función de manejo de prensa
          />
          <IconButton
            icon="twitter"
            iconColor="#1DA1F2" // Color de Twitter
            size={30}
            onPress={handleTwitterPress} // Agregamos la función de manejo de prensa
          />
          <IconButton
            icon="instagram"
            iconColor="#C13584" // Color de Instagram
            size={30}
            onPress={handleInstagramPress} // Agregamos la función de manejo de prensa
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    

    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '50%',
      },

    container: {
      flex: 1,
      padding: 10,
      borderRadius:8
      
    },
    card: {

      margin:5,   
      backgroundColor: '#fff',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },

    socialMediaHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 20,
      },

    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    textContainer: {
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: '#666',
      marginBottom: 5,
    },
    date: {
      fontSize: 12,
      color: '#999',
    },
    socialMediaButtons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingVertical: 20,
    },
  });

export default News;
