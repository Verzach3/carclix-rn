// Importaciones necesarias
import React  from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CarDetails from "./CarDetails";
import { RootStackParamList } from "../Types/navigationTypes";
import NewsDetailsScreen from "./NewsDetailsScreen";
import CarsScreen from "./CarsScreen";

const Stack = createStackNavigator<RootStackParamList>();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackHome"
        component={CarsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
};

export default Home;
