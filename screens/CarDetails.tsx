import { View, ScrollView, Image } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import Carousel from "react-native-reanimated-carousel";



const CarDetails = () => {
  return (
    <ScrollView>
      <Carousel
        width={500}
        height={500 / 2}
        // autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={500}
        renderItem={({ index }) => (
          <Image
            width={500}
            height={500 / 2}
            source={{ uri: "https://picsum.photos/700" }}
          />
        )}
      />
      <View style={{ padding: 20 }}>
        <Text variant="headlineMedium" style={{ fontWeight: "700"}} >Titulo del auto</Text>
        <Text variant="headlineSmall">$ 100.000</Text>
        <Text style={{ fontSize: 15 }}>Rojo</Text>
        <Text style={{ fontSize: 15 }}>Descripcion del auto</Text>
      </View>
    </ScrollView>
  );
};

export default CarDetails;
