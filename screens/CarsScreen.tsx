import { useEffect, useState } from "react";
import { getVehicles } from "../services/vehicles";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar, IconButton, TextInput, Text } from "react-native-paper";
import CarCard from "../components/CarCard";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Vehicle } from "../Types/vehicle";
import { useNavigation } from "@react-navigation/native";
import { NewsItem } from "../Types/navigationTypes";

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

    const [activeSlide, setActiveSlide] = useState(0);
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");

  const navigation = useNavigation<any>();

  const handlePressNews = (news: NewsItem) => {
    navigation.navigate("NewsDetails", { news });
  };
  const windowWidth = useWindowDimensions().width;

  const handleSearch = () => {
    // Lógica para manejar la búsqueda
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Autos</Text>

      <Text style={styles.subtitle}>Buscar Autos</Text>
      <View style={styles.separator1} />
      {/* Contenedor de Búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Modelo"
          value={model}
          onChangeText={setModel}
          style={styles.searchInput}
        />
        <TextInput
          placeholder="Año"
          value={year}
          keyboardType="number-pad"
          onChangeText={setYear}
          style={styles.searchInput}
        />
        <TextInput
          placeholder="Kilometraje"
          value={mileage}
          keyboardType="number-pad"
          onChangeText={setMileage}
          style={styles.searchInput}
        />
        <IconButton
          icon="magnify"
          size={30}
          onPress={handleSearch}
          style={styles.searchButton}
        />
      </View>

      <View style={styles.separator2} />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginTop: 30,
    margin: 20,
  },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },

  separator1: {
    borderBottomWidth: 5,
    borderBottomColor: "#ddd",
    marginHorizontal: 10,
  },
  separator2: {
    borderBottomWidth: 5,
    borderBottomColor: "#ddd",
    marginHorizontal: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    width: "30%",
  },
  searchButton: {
    backgroundColor: "#4a90e2",
  },
  // Más estilos si son necesarios
});

export default CarsScreen;
