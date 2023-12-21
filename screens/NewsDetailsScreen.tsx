import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { RouteProp } from '@react-navigation/native';

// Asegúrate de que este tipo coincida con la estructura de tus noticias
type NewsItem = {
  title: string;
  description: string;
  images: number[];  // Asumiendo que images son referencias locales (require)
  date: string;
};

// Define los tipos de parámetros para tu stack navigator
type RootStackParamList = {
  NewsDetails: {
    news: NewsItem;
  };
  // ...otros tipos de ruta si los tienes...
};

// Tipo para la prop 'route' de NewsDetailsScreen
type NewsDetailsScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetails'>;

// Props para NewsDetailsScreen
type NewsDetailsScreenProps = {
  route: NewsDetailsScreenRouteProp;
};

const NewsDetailsScreen = ({ route }: NewsDetailsScreenProps) => {
    const { news } = route.params;

    const renderItem = ({ item }: { item: number }) => (
    <Image source={item} style={styles.image} />
  );
  return (
    <ScrollView>
      <Carousel
        data={news.images}
        renderItem={renderItem}
        width={300}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.date}>{news.date}</Text>
        <Text style={styles.description}>{news.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: 'grey',
  },
  description: {
    fontSize: 16,
  },
  // Más estilos si es necesario
});

export default NewsDetailsScreen;
