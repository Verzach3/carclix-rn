import { useEffect, useState } from "react";
import { getVehicles } from "../services/vehicles";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import CarCard from "../components/CarCard";
import { StyleSheet } from "react-native";
import { Vehicle } from "../Types/vehicle";
import { ca } from "react-native-paper-dates";

const CarsScreen = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  useEffect(() => {
    console.log("CarsScreen");
    updateVehicles();
  }, []);

  const updateVehicles = async () => {
    try {
      const data = await getVehicles();
      setVehicles(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Autos" />
      </Appbar.Header>
      {vehicles.map((vehicle: Vehicle) => {
        return <CarCard key={vehicle.id} vehicle={vehicle} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  newsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
  },
  socialMediaButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
  // Más estilos si es necesario
});

export default CarsScreen;
