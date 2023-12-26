import Insurance from "./Insurance";
import { createStackNavigator } from "@react-navigation/stack";
import Sell from "./Sell";
import { Screen } from "react-native-screens";

const Stack = createStackNavigator();

const SellNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sell" component={Sell} />
      <Stack.Screen name="Insurance" component={Insurance} />
    </Stack.Navigator>
  );
};

export default SellNavigator;
