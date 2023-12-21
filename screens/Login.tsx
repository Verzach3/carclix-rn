import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput, Text, Avatar } from "react-native-paper";

const Login = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo_cropped.png")}
      />
      <TextInput
        mode="outlined"
        style={styles.inputs}
        label={"Email"}
        placeholder="Tu Email"
      />
      <TextInput
        mode="outlined"
        style={styles.inputs}
        label={"Contraseña"}
        placeholder="Tu Contraseña"
      />
      <Button mode="outlined" onPress={() => navigation.navigate("Home")}>
        Login
      </Button>
      <View style={styles.textContainer}>
        <Text style={styles.texts}>
          ¿No tienes cuenta?{" "}
          <Text
            style={styles.textLink}
            onPress={() => navigation.navigate("Register")}
          >
            Registrate
          </Text>
        </Text>
        <Text style={styles.texts}>
          ¿Olvidaste tu contraseña?{" "}
          <Text
            style={styles.textLink}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Recuperar contraseña
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    padding: 20,
  },
  inputs: {
    marginBottom: 20,
  },
  textContainer: {
    marginTop: 20,
    justifyContent: "center",
  },
  texts: {
    marginTop: 10,
    textAlign: "center",
  },
  textLink: {
    color: "#007bff",
    fontWeight: "bold",
  },
  logo: {
    height: 250,
    width: 300,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: "10%",
    marginBottom: 50,
    backgroundColor: "transparent",
    borderRadius: 0,
  },
});

export default Login;
