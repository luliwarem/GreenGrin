import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CirculoPuntos from "./CirculoPuntos";
import NavBar from "./NavBar";
import QRScanner from "./QRScanner";

export default function HomeScreen({ navigation }) {
  const [imageSources, setImageSources] = useState([]);

  const ScrollableImageList = () => {
    
    return setimageSources(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/1024px-Grey_Square.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/1024px-Grey_Square.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/1024px-Grey_Square.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/1024px-Grey_Square.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/1024px-Grey_Square.svg.png"
    );
  };

  return (
    <View style={styles.container}>
      <Text> Hola, Patricia!</Text>
      <CirculoPuntos style={styles.circleShape}>
        <Text>2300 GreenPoints</Text>
      </CirculoPuntos>
      <Text>Recomendaciones para ti</Text>
      <ScrollView horizontal style={{ flexDirection: "row", padding: 10 }}>
        <ScrollableImageList>
        </ScrollableImageList>
        {imageSources.map((source, index) => (
          <Image
            key={index}
            source={{ uri: source }}
            style={{ width: 100, height: 100, margin: 5 }}
          />
        ))}
      </ScrollView>
      <Text>Estaciones Green</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 80,
    borderRadius: 20,

    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "green",
    fontWeight: "bold",
  },
  circleShape: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
