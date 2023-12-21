import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { RootStackParamList, NewsItem } from "../Types/navigationTypes";
import { RouteProp } from "@react-navigation/native";
// Asume que NewsItem tiene la misma estructura que en Home.tsx

// Tipo para las props de NewsDetailsScreen
type NewsDetailsScreenProps = {
  route: RouteProp<RootStackParamList, "NewsDetails">;
};

const NewsDetails = ({ route }: NewsDetailsScreenProps) => {
  const { news } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.date}>{news.date}</Text>
      {news.images.map((img, index) => (
        <Image key={index} source={img} style={styles.image} />
      ))}
      <Text style={styles.description}>{news.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: "grey",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  // Añade más estilos según sea necesario
});

export default NewsDetails;
