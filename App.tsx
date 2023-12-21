import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import HomeNav from "./screens/HomeNav";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PocketBase, { AsyncAuthStore } from "pocketbase";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
// modify the global object to include the PocketBase instance
declare global {
  namespace globalThis {
    var pocketbase: PocketBase;
  }
}

const Stack = createStackNavigator();

const store = new AsyncAuthStore({
  save: async (serialized) => AsyncStorage.setItem("pb_auth", serialized),
  initial: AsyncStorage.getItem("pb_auth"),
});

global.pocketbase = new PocketBase("http://10.241.111.15:8090", store);

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#007bff",
    accent: "#007bff",
    primaryContainer: "#b3d7ff",
    background: "#e6f2ff",
    surface: "#f8f9fa",
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PaperProvider theme={theme}>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={HomeNav}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </PaperProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
      <ExpoStatusBar style="auto" hidden={false} />
    </SafeAreaProvider>
  );
}
