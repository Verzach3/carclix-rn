import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Vehicle } from "../Types/vehicle";
import { getImagesById } from "../services/vehicles";
import { SERVER_URL } from "../constants";
const CarCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const navigation = useNavigation<any>();
  const [vehicleImageId, setVehicleImageId] = useState("");
  useEffect(() => {
    const getVehicleImage = async () => {
      const data = await getImagesById(vehicle.id);
      setVehicleImageId(data.data[0].id);
    };
    getVehicleImage();
  });
  return (
    <View>
      <Card
        style={{ marginHorizontal: 5, marginVertical: 5, borderRadius: 5 }}
        onPress={() => navigation.navigate("CarDetails")}
      >
        <Card.Cover
          style={{ borderRadius: 5 }}
          source={{
            uri: `${SERVER_URL}/vehicles/images/one/${vehicleImageId}`,
          }}
        />
        <Card.Title
          title={`${Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
          }).format(Number(vehicle.purchase_price))}`}
          titleVariant="titleLarge"
        />
        {/* <Card.Title title={`${vehicle.vehicle_maker} ${vehicle.vehicle_model}`} subtitle={vehicle.vehicle_maker} /> */}
        {/* <Text>$ {vehicle.purchase_price}</Text> */}
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
