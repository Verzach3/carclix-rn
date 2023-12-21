import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput, Text } from "react-native-paper";
import { Formik } from "formik";
import { StatusBar } from "react-native";
import { login } from "../services/auth";
import { z } from "zod";
import { loginValidation } from "../validations/loginValidation";
const Login = () => {
  const navigation = useNavigation<any>();
  const [isRegister, setIsRegister] = useState(false);
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ScrollView style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/logo_cropped.png")}
        />
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            address: "",
            phone: "",
            email: "",
            password: "",
            confirmpassword: "",
            city: "",
            dateofbirth: "",
            gender: "",
            contactpreference: "",
            cedula: "",
          }}
          onSubmit={async (values) => {
            try {
              const success = await login(values.email, values.password);
              console.log(`success: ${success}`);
              if (success) {
                navigation.navigate("Home");
              }
            } catch (error) {
              console.log(JSON.stringify(error));
            }
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              {isRegister && (
                <>
                  <TextInput
                    mode="outlined"
                    style={styles.inputs}
                    label={"Nombre"}
                    placeholder="Tu Nombre"
                    onChangeText={handleChange("firstname")}
                    value={values.firstname}
                  />
                  <TextInput
                    mode="outlined"
                    style={styles.inputs}
                    label={"Apellido"}
                    placeholder="Tu Apellido"
                    onChangeText={handleChange("lastname")}
                    value={values.lastname}
                  />
                  <TextInput
                    mode="outlined"
                    style={styles.inputs}
                    label={"Telefono"}
                    placeholder="Tu Telefono"
                    onChangeText={handleChange("phone")}
                    value={values.phone}
                  />
                </>
              )}
              <TextInput
                mode="outlined"
                style={styles.inputs}
                label={"Email"}
                placeholder="Tu Email"
                onChangeText={handleChange("email")}
                value={values.email}
              />
              <TextInput
                mode="outlined"
                style={styles.inputs}
                label={"Contraseña"}
                placeholder="Tu Contraseña"
                onChangeText={handleChange("password")}
                value={values.password}
              />
              {isRegister && (
                <>
                  <TextInput
                    mode="outlined"
                    style={styles.inputs}
                    label={"Contraseña"}
                    placeholder="Tu Contraseña"
                    onChangeText={handleChange("confirmpassword")}
                    value={values.confirmpassword}
                  />
                  <TextInput
                    mode="outlined"
                    style={styles.inputs}
                    label={"Ciudad"}
                    placeholder="Tu Ciudad"
                    onChangeText={handleChange("city")}
                    value={values.city}
                  />
                  <TextInput
                    mode="outlined"
                    style={styles.inputs}
                    label={"Fecha de Nacimiento"}
                    placeholder="Tu Fecha de Nacimiento"
                    onChangeText={handleChange("dateofbirth")}
                    value={values.dateofbirth}
                  />
                  <TextInput
                    mode="outlined"
                    style={styles.inputs}
                    label={"Genero"}
                    placeholder="Tu Genero"
                    onChangeText={handleChange("gender")}
                    value={values.gender}
                  />
                  <TextInput
                    mode="outlined"
                    style={styles.inputs}
                    label={"Preferencia de Contacto"}
                    placeholder="Tu Preferencia de Contacto"
                    onChangeText={handleChange("contactpreference")}
                    value={values.contactpreference}
                  />
                  <TextInput
                    mode="outlined"
                    style={styles.inputs}
                    label={"Cedula"}
                    placeholder="Tu Cedula"
                    onChangeText={handleChange("cedula")}
                    value={values.cedula}
                  />
                </>
              )}
              <Button mode="outlined" onPress={() => handleSubmit()}>
                Login
              </Button>
            </>
          )}
        </Formik>
        <View style={styles.textContainer}>
          <Text style={styles.texts}>
            {!isRegister ? `¿No tienes cuenta?` : `¿Ya tienes cuenta?`}{" "}
            <Text
              style={styles.textLink}
              onPress={() => setIsRegister((prev) => !prev)}
            >
              {!isRegister ? `Registrate` : `Inicia Sesion`}
            </Text>
          </Text>
          <Text style={Object.assign({}, styles.texts, { marginBottom: 20 })}>
            ¿Olvidaste tu contraseña?{" "}
            <Text
              style={styles.textLink}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Recuperar contraseña
            </Text>
          </Text>
          <Text
            style={styles.textLink}
            onPress={() => navigation.navigate("Home")}
          >
            Ir a Home
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    paddingHorizontal: 20,
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
