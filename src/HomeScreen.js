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
import { useContextState } from "./contextState";

export default function HomeScreen({ navigation }) {

  const { contextState, setContextState } = useContextState();

  const [imageSources, setImageSources] = useState([]);
  const [imgPerfil, setImgPerfil] = useState('https://hips.hearstapps.com/rover/profile_photos/67055711-c808-4a4d-811a-e7155a2bce10_1667409691.file');
  const [mapa, setMapa] = useState('https://www.lavanguardia.com/files/image_948_465/uploads/2015/08/28/5fa28157b6339.jpeg');

  const images = [
    { id: '1', imageUrl: 'https://seeklogo.com/images/E/easy-logo-3360580055-seeklogo.com.png' },
    { id: '2', imageUrl: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5362a828-0f5b-4d17-a6c5-d0677dc89baa_1000x1000.jpeg' },
    { id: '3', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_879957-MLA69998218581_062023-O.webp' },
    { id: '4', imageUrl: 'https://boardinggate.com.sg/wp-content/uploads/Jansport-Logo.png' },
    { id: '5', imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/181109204242-mercado-libre-estrategias-longobardi-full-169.jpg' },
    { id: '6', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlERLuPO0nRJfq9obtvB1jp13kWnHPmY2fMQ&usqp=CAU' },
  ];

  console.log(contextState.user)
  useEffect(() => {
    if(contextState.userToken == undefined){

      alert("No hay token, por favor vuelva a iniciar sesion")
      navigation.navigate("Login")
    }
  }, []);
  return (
    <ScrollView>
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Image style={styles.perfil} source={{ uri: imgPerfil }} />
        <Text style={styles.usuario}> Hola, {contextState.user.Nombre}</Text>
      </View>
      
      <CirculoPuntos style={styles.circleShape}/>
      <Text style={styles.items}>Recomendaciones para ti</Text>
        <ScrollView
          horizontal={true}
          style={styles.scroll}
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
        <Image style={styles.mapa} source={{ uri: mapa }}/>
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
    width: 200,
    height: 200,
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
    marginBottom: 70,
  },
  items: {
    fontSize:18,
    marginTop:70,
    color: "green",
    fontWeight: "bold",
    width: 370,
    margin: 10,
  },
  estaciones: {
    fontSize:17,
    color: "green",
    fontWeight: "bold",
    width: 370,
    margin: 10,
  },
  listItem: {
    marginHorizontal: 10,
  },
  imageContainer: {
    marginHorizontal: 5,
  },
  image: {
    width: 117,
    height: 117,
    borderRadius: 10,
  },
  mapa: {
    width: 370,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  scroll:{
    marginLeft:15,
  },
});
