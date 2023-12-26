import { View, Text } from "react-native";
import React, { useState } from "react";

import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Home from "./Home";
import SellNavigator from "./SellNavigator";
import Account from "./Account";
import News from "./News"; // Importa el componente de noticias aquí
import { SafeAreaView } from "react-native-safe-area-context";

const BottomNavigation = createMaterialBottomTabNavigator();

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
      <BottomNavigation.Navigator>
        <BottomNavigation.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: "cart",
          }}
        />
        <BottomNavigation.Screen
          name="sell"
          component={SellNavigator}
          options={{
            tabBarIcon: "cart-plus",
          }}
        />
        <BottomNavigation.Screen
          name="account"
          component={Account}
          options={{
            tabBarIcon: "account-circle",
          }}
        />
        <BottomNavigation.Screen
          name="news"
          component={News}
          options={{
            tabBarIcon: "newspaper-variant-multiple",
          }}
        />
      </BottomNavigation.Navigator>
    </SafeAreaView>
  );
};

export default HomeNav;
