import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
} from "react-native";
import {BarCodeScanner} from 'expo-barcode-scanner';
import { CurrentRenderContext } from "@react-navigation/native";
import QRCodeScanner from 'react-native-qrcode-scanner';

// npm install react-native-camera react-native-qrcode-scanner
// import { RNCamera } from 'react-native-camera'

export default function QRScanner({navigation}){

  const [date, setDate] = useState({})
  const [idEstacion, setIdEstacion] = useState({})
  const [botellasIngresadas, setBotellasIngresadas] = useState({})
  const [puntos, setPuntos] = useState({})
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState('Not yet scanned')
  
  const askForCameraPermission = () => {
    (async () => {
      const status = await BarCodeScanner.requestPermissionsAsync().then(res=>console.log(res)).catch(error=>console.log())
      setHasPermission(status === 'granted');
    })()
  }

  useEffect(() => {
    askForCameraPermission();
  }, [])

  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  if(hasPermission === null){
    return(
      <View style={styles.cameraContainer}>
        <Text> Requesting for camera permission</Text>
        <Button title = {'Allow camera'} onPress={() => askForCameraPermission()}/>
      </View>)
  }
/*
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
*/

    return (
      <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Text style={styles.escanea}>Escanea el codigo QR</Text>
      </View>
    );
  }
  

onQRCodeRead = (e) => {
  // para manejar la informacion del codigo QR leido
  console.log(e.data);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 200,
    
  },
  cameraContainer: {
    flex: 1,
    margin: 200,
  },
  Button: {
    backgroundColor: "#469735"
  },
  escanea:{
    color: "#000000",
    width: 200,
    margin: -85,
    fontWeight: 800,
  }
});
