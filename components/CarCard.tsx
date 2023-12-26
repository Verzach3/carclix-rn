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
        style={{ marginHorizontal: 10, marginVertical: 10, borderRadius: 0 }}
        onPress={() => navigation.navigate("CarDetails", {
          vehicleId: vehicle.id,
        })}
      >
        <Card.Cover
          style={{ borderRadius: 0 }}
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
          subtitle={`${vehicle.vehicle_maker} ${vehicle.vehicle_model}`}
          subtitleVariant="bodyLarge"
        />
      </Card>
    </View>
  );
};

export default CarCard;
