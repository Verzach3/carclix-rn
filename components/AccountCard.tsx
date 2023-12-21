import { View, Text } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";

const AccountCard = () => {
  return (
    <View>
      <Card style={{ marginBottom: 10, marginTop: "20%"}}>
        <Card.Content>
          <Button mode="contained" style={{ borderRadius: 10, marginVertical: 5 }}>
            Seleccion de Pais
          </Button>
          <Button mode="contained" style={{ borderRadius: 10, marginVertical: 5 }}>
            Invita a tus amigos
          </Button>
          <Button mode="contained" style={{ borderRadius: 10, marginVertical: 5 }}>
            Danos tu opinion
          </Button>
          <Button mode="contained" style={{ borderRadius: 10, marginVertical: 5 }}>
            Calificanos
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default AccountCard;
