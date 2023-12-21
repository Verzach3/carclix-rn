import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";
type NewsCardProps = {
  title: string;
  description: string;
  images: string[]; // Cambia el tipo a any[] o string[]
  date: string;
  onPress: () => void;
};

const imageHeight = 200; // Altura fija para las imágenes
const cardHeight = 300; // Altura fija para las tarjetas

const NewsCard = ({
  title,
  description,
  images,
  date,
  onPress,
}: NewsCardProps) => {
  const renderItem = ({ item }: { item: any }) => (
    <Image source={item} style={[styles.image, { height: imageHeight }]} />
  );

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={[styles.card, { height: cardHeight }]}>
        <Card.Content style={styles.content}>
          <Carousel
            width={350}
            height={imageHeight}
            data={images}
            autoPlay
            renderItem={renderItem}
            // Esto desactiva poder cambiar de imagenes deslizando, ya que esto esta dentro de otro carousel los gestos se encadenan
            // y no se puede deslizar para cambiar de noticia
            panGestureHandlerProps={{
              activeOffsetX: [-100, 100],
              activeOffsetY: [-100, 100],
            }}
          />
          <Title>{title}</Title>
          <Text style={styles.date}>{date}</Text>
          <Paragraph>{description}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 2,
    width: "100%",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
  content: {
    //make the items in stack
    flexDirection: "column",
    //make the items in stack
    justifyContent: "center",
    alignContent: "center",
    // make the items in stack
  },
  date: {
    fontSize: 12,
    color: "grey",
    marginBottom: 10,
  },
  // Más estilos si es necesario
});

export default NewsCard;
