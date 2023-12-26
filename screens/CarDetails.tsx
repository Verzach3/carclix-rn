import { View, ScrollView, Image, useWindowDimensions } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import { getImagesById, getVehicleById } from "../services/vehicles";
import { Vehicle } from "../Types/vehicle";
import { SERVER_URL } from "../constants";

const CarDetails = ({ route, navigation }: { route: any; navigation: any }) => {
  const dimensions = useWindowDimensions();
  const [vehicle, setVehicle] = useState<Vehicle | undefined>(undefined);
  const [vehicleImages, setVehicleImages] = useState<any[]>([]);
  useEffect(() => {
    async function getVehicle() {
      const vehicle: Vehicle = (await getVehicleById(route.params.vehicleId))
        .data;
      const images = await getImagesById(route.params.vehicleId);
      setVehicle(vehicle);
      setVehicleImages(images.data);
    }
    getVehicle();
  }, []);
  if (!vehicle) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: dimensions.height,
        }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <ScrollView style={{ flex: 1 }}>
      <Carousel
        width={500}
        height={500 / 2}
        // autoPlay={true}
        data={vehicleImages}
        scrollAnimationDuration={500}
        renderItem={({ index }) => (
          <Image
            width={500}
            height={500 / 2}
            source={{
              uri: `${SERVER_URL}/vehicles/images/one/${vehicleImages[index].id}`,
            }}
          />
        )}
      />
      <View style={{ padding: 20 }}>
        <Text variant="headlineMedium" style={{ fontWeight: "700" }}>
          {vehicle?.vehicle_maker} {vehicle?.vehicle_model}
        </Text>
        <Text variant="headlineSmall">{`${Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
        }).format(Number(vehicle?.purchase_price))}`}</Text>
        <Text style={{ fontSize: 15 }}>Descripcion del auto</Text>
      </View>
    </ScrollView>
  );
};

export default CarDetails;
