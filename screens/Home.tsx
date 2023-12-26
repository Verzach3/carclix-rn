// Importaciones necesarias
import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from "react-native";
import { Appbar, IconButton } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import CarCard from "../components/CarCard";
import NewsCard from "../components/NewsCard";
import CarDetails from "./CarDetails";
import { RootStackParamList, NewsItem } from "../Types/navigationTypes";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";
import NewsDetailsScreen from "./NewsDetailsScreen";
import { getVehicles } from "../services/vehicles";

const Stack = createStackNavigator<RootStackParamList>();

const newsData = [
  {
    title: "Noticia 1",
    description: "Descripción de la Noticia 1",
    images: [require("../assets/News1.png"), require("../assets/News2.png")],
    date: "01-01-2023",
  },

  {
    title: "Noticia 2",
    description: "Descripción de la Noticia 1",
    images: [require("../assets/News2.png"), require("../assets/News2.png")],
    date: "01-01-2023",
  },
  // Más noticias...
];

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackHome"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  const [vehicles, setVehicles] = useState<any>([]);
  useEffect(() => {
    getVehicles()
      .then((data) => {
        if (!vehicles.length) {
          return;
        }
        setVehicles(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Autos" />
      </Appbar.Header>
      <CarCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  newsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
  },
  socialMediaButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
  // Más estilos si es necesario
});

export default Home;
