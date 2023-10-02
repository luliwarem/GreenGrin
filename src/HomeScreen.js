import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CirculoPuntos from "./CirculoPuntos";
import NavBar from "./NavBar";
import QRScanner from "./QRScanner";
import { ListItem } from 'react-native-elements';

export default function HomeScreen({ navigation }) {
  const [imageSources, setImageSources] = useState([]);

  const images = [
    { id: '1', imageUrl: 'https://i.pinimg.com/474x/f9/cd/f9/f9cdf9807c6e607bf3a2c171825cb85a.jpg' },
    { id: '2', imageUrl: 'https://i.pinimg.com/474x/f9/cd/f9/f9cdf9807c6e607bf3a2c171825cb85a.jpg' },
    { id: '3', imageUrl: 'https://i.pinimg.com/474x/f9/cd/f9/f9cdf9807c6e607bf3a2c171825cb85a.jpg' },
    { id: '4', imageUrl: 'https://i.pinimg.com/474x/f9/cd/f9/f9cdf9807c6e607bf3a2c171825cb85a.jpg' },
    { id: '5', imageUrl: 'https://i.pinimg.com/474x/f9/cd/f9/f9cdf9807c6e607bf3a2c171825cb85a.jpg' },
    { id: '6', imageUrl: 'https://i.pinimg.com/474x/f9/cd/f9/f9cdf9807c6e607bf3a2c171825cb85a.jpg' },
  ];
 
  return (
    <ScrollView>
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Image source="https://hips.hearstapps.com/rover/profile_photos/67055711-c808-4a4d-811a-e7155a2bce10_1667409691.file" style={styles.perfil}/>
        <Text style={styles.usuario}> Hola, Patricia!</Text>
      </View>
      
      <CirculoPuntos style={styles.circleShape}/>
      <Text style={styles.items}>Recomendaciones para ti</Text>
        {/*aca van las fotos scollView horizontal*/}
        <ScrollView
          horizontal={true}
        >
        <FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
          </View>
          )}
        />
        </ScrollView>
      <Text style={styles.estaciones}>Estaciones Green</Text>
        <Image source='https://www.lavanguardia.com/files/image_948_465/uploads/2015/08/28/5fa28157b6339.jpeg'style={styles.mapa} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex:1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  container2:{
    flexDirection: 'row', // Horizontal layout
    padding: 16,
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
  perfil: {
    marginLeft:40,
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  usuario: {
    paddingTop:5,
    color: "green",
    fontWeight: "bold",
    width: 370,
    marginTop: 0,
    fontSize: 20,
    marginBottom: 100,
  },
  items: {
    marginTop:100,
    color: "green",
    fontWeight: "bold",
    width: 370,
    margin: 10,
  },
  estaciones: {
    color: "green",
    fontWeight: "bold",
    width: 370,
    margin: 10,
  },
  listItem: {
    marginHorizontal: 10,
  },
  imageContainer: {
    marginHorizontal: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  mapa: {
    width: 370,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});
