import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CirculoPuntos from "./CirculoPuntos";
import axios from 'axios'
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';


//npm install react-native-camera react-native-qrcode-scanner

export default function QRScanner({navigation}){

  const [date, setDate] = useState({})
  const [idEstacion, setIdEstacion] = useState({})
  const [botellasIngresadas, setBotellasIngresadas] = useState({})
  const [puntos, setPuntos] = useState({})
  

  axios.post('https://localhost:3000/movimientos/', { idEstacion : idEstacion, botellasIngresadas: botellasIngresadas, fecha: date, puntos : puntos })
  .then(response => {
    // Maneja la respuesta de la API
    console.log(response.data);
  })
  .catch(error => {
    // Maneja el error en caso de fallo de la solicitud
    console.error(error);
  });

  axios.put('https://localhost:3000/user/1', {puntos : puntos })
  .then(response => {
    // Maneja la respuesta de la API
    console.log(response.data);
  })
  .catch(error => {
    // Maneja el error en caso de fallo de la solicitud
    console.error(error);
  });
}

onQRCodeRead = (e) => {
  // para manejar la informacion del codigo QR leido
  console.log(e.data);
};

render(); {
  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={this.onQRCodeRead}
        cameraStyle={styles.cameraContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
});
