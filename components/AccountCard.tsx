// AccountCard.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button } from "react-native-paper";

const AccountCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <Button
            mode="contained"
            icon="flag"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={() => {/* lógica de selección de país */}}
          >
            Selección de País
          </Button>
          <Button
            mode="contained"
            icon="account-multiple-plus"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={() => {/* lógica de invitar amigos */}}
          >
            Invita a tus amigos
          </Button>
          <Button
            mode="contained"
            icon="pencil"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={() => {/* lógica para dar opinión */}}
          >
            Danos tu opinión
          </Button>
          <Button
            mode="contained"
            icon="star"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={() => {/* lógica para calificar la app */}}
          >
            Califícanos
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
  },
  card: {
    borderRadius: 15,
    marginTop: -70,
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,
    elevation: 4,
  },
  button: {
    borderRadius: 10,
    marginVertical: 13,
    paddingVertical: 4,
    backgroundColor: '#4a90e2', // Botones azules para continuar con la temática
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default AccountCard;
