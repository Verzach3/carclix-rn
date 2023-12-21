import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Appbar, Button } from "react-native-paper";
import AccountCard from "../components/AccountCard";

const Account = () => {
  return (
    <View style={{ backgroundColor: "#fff"}}>
      <Appbar.Header>
        <Appbar.Content title="Hola [Nombre de usuario]" />
      </Appbar.Header>
      <View style={styles.container}>
        <AccountCard/>
        <Button style={styles.logoutButton} buttonColor="red" mode="contained">
          Cerrar Sesion
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  logoutButton: {
    borderRadius: 10,
  },
});

export default Account;
