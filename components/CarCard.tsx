import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Vehicle } from "../Types/vehicle";

const CarCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Card
        style={{ marginHorizontal: 5, marginVertical: 5, borderRadius: 5 }}
        onPress={() => navigation.navigate("CarDetails")}
      >
        <Card.Cover
          style={{ borderRadius: 5 }}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Card.Title title={`${vehicle.vehicle_maker} ${vehicle.vehicle_model}`} subtitle={vehicle.vehicle_maker} />
        <Card.Content>
          <Text>$ {vehicle.purchase_price}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            style={{ borderRadius: 10, marginVertical: 5 }}
            icon={"shopping"}
          >
            Comprar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CarCard;
