import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import { Portal, Dialog, SegmentedButtons, Text, TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Checkbox } from 'react-native-paper';

const Sell = () => {

  const navigation = useNavigation<any>();
  const [image, setImage] = useState<string[]>([]);
  const [model, setModel] = useState<string>("");
  const [kilometraje, setKilometraje] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [vin, setVin] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [hasInsurance, setHasInsurance] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets.map((asset) => asset.uri));
    }
  };

  const handleSubmission = async () => {

    const data = new FormData();
    data.append("model", model);
    data.append("kilometraje", kilometraje);
    data.append("price", price);
    data.append("color", color);
    data.append("condition", condition);
    data.append("status", status);
    data.append("year", year);
    data.append("vin", vin);
    for (const uri of image) {
      let uriArray = uri.split(".");
      let fileType = uriArray[uriArray.length - 1];
      data.append("images", {
        uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      } as any);
    }
    try {
      await global.pocketbase.collection("cars").create(data);
      setIsError(false);
      setVisible(true);
    } catch (error) {
      setIsError(true);
      setVisible(true);
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              {isError
                ? "Error al publicar el vehiculo"
                : "Auto Publicado Correctamente"}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                if (!isError) {
                  setModel("");
                  setPrice("");
                  setColor("");
                  setCondition("");
                  setStatus("");
                  setYear("");
                  setVin("");
                  setImage([]);
                }
                setVisible(false);
              }}
            >
              Done
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Text style={styles.title}>Registra tu carro</Text>
      <TextInput
        value={model}
        onChangeText={(text) => setModel(text)}
        mode="outlined"
        style={styles.inputs}
        label={"Modelo"}
        placeholder="El modelo de tu auto"
      />
      <TextInput
        value={kilometraje}
        onChangeText={(text) => setModel(text)}
        mode="outlined"
        style={styles.inputs}
        label={"Kilometraje"}
        placeholder="El Kilometraje de tu auto"
      />
      <TextInput
        value={price}
        onChangeText={(text) => setPrice(text)}
        mode="outlined"
        style={styles.inputs}
        label={"Precio de Venta"}
        placeholder="El precio de venta de tu auto"
      />
      <TextInput
        value={color}
        onChangeText={(text) => setColor(text)}
        mode="outlined"
        style={styles.inputs}
        label={"Color"}
        placeholder="El color de tu auto"
      />
      <TextInput
        value={year}
        onChangeText={(text) => setYear(text)}
        mode="outlined"
        style={styles.inputs}
        label={"Año"}
        placeholder="El año de tu auto"
      />
      <TextInput
        value={vin}
        onChangeText={(text) => setVin(text)}
        mode="outlined"
        style={styles.inputs}
        label={"VIN"}
        placeholder="El VIN de tu auto"
      />
      <SegmentedButtons
        style={{ marginBottom: 20 }}
        value={condition}
        onValueChange={(value) => setCondition(value)}
        multiSelect={false}
        buttons={[
          {
            value: "Excelente",
            label: "Excelente",
          },
          {
            value: "Bueno",
            label: "Bueno",
          },

          {
            value: "Malo",
            label: "Malo",
          },
          {
            value: "Reparar",
            label: "Reparar",
          },
        ]}
      />
      <SegmentedButtons
        style={{ marginBottom: 20 }}
        value={status}
        onValueChange={(value) => setStatus(value)}
        multiSelect={false}
        buttons={[
          {
            value: "Nuevo",
            label: "Nuevo",
          },
          {
            value: "Usado",
            label: "Usado",
          },
        ]}
      />

      <Button style={{ marginBottom: 0 }} mode="outlined" onPress={pickImage}>
        Seleccionar Imagen
      </Button>
      <View style={styles.imagesContainer}>
        {(image?.length ?? 0) > 0 &&
          image?.map((image) => {
            return (
              <Image
                key={image}
                source={{ uri: image }}
                style={{ width: 100, height: 100 }}
              />
            );
          })}
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={hasInsurance ? 'checked' : 'unchecked'}
          onPress={() => {
            setHasInsurance(!hasInsurance);
          }}
        />
        <Text style={styles.checkboxLabel}>¿Tiene seguro para el vehículo?</Text>
      </View>

      {/* Botón condicional basado en el estado del seguro */}
      {
        hasInsurance ? (
          <Button
            style={{ marginTop: 20, marginBottom: 30 }}
            mode="contained"
            onPress={() => navigation.navigate("Insurance")}
          >
            Ir a Seguro de Vehículo
          </Button>
        ) : (
          <Button
            style={{ marginTop: 20, marginBottom: 30 }}
            mode="contained"
            onPress={handleSubmission}
          >
            Publicar
          </Button>
        )
      }


    </ScrollView>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    margin: 20
  },

  container: {
    padding: 20,
    flex: 1,
    alignContent: "center",
    backgroundColor: "#fff",
  },
  inputs: {
    marginBottom: 20,
  },
  imagesContainer: {
    // make a grid
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default Sell;