import { View, Text } from "react-native";
import React, { useState } from "react";

import { BottomNavigation } from "react-native-paper";
import MatIcons from "@expo/vector-icons/MaterialIcons"
import IonIcons from "@expo/vector-icons/Ionicons"
import Home from "./Home";
import Sell from "./Sell";
import Account from "./Account";
import News from "./News"; // Importa el componente de noticias aquí
import { SafeAreaView } from "react-native-safe-area-context";


const HomeNav = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Compra",
      focusedIcon: "cart",
      unfocusedIcon: "cart-outline",
    },
    { key: "sell", title: "Vende", focusedIcon: "cart-plus" },
    { key: "account", title: "Cuenta", focusedIcon: "account-circle" },
    { key: "news", title: "Noticias", focusedIcon: "newspaper-variant-multiple" }, // Agrega la opción de Noticias
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={BottomNavigation.SceneMap({
          home: Home,
          sell: Sell,
          account: Account,
          news: News, // Agrega el componente de Noticias
        })}
      />
    </SafeAreaView>
  );
};

export default HomeNav;
