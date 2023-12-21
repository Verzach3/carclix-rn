import { View, Text } from "react-native";
import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import MatIcons from "@expo/vector-icons/MaterialIcons"
import IonIcons from "@expo/vector-icons/Ionicons"
import Home from "./Home";
import Sell from "./Sell";
import Account from "./Account";
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
  ]);

  return (
    <>
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={BottomNavigation.SceneMap({
        home: Home,
        sell: Sell,
        account: Account,
      })}
      />
      </>
  );
};

export default HomeNav;