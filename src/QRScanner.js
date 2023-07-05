import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
} from "react-native";
import {BarCodeScanner} from 'expo-barcode-scanner';


//npm install react-native-camera react-native-qrcode-scanner

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
      const {status} = await BarCodeScanner.requestPermissionAsync();
      setHasPermission(status === 'granted');
      console.log("dale que se puedeee")
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
      <View style={styles.container}>
        <Text> Requesting for camera permission</Text>
        <Button title = {'Allow camera'} onPress={() => askForCameraPermission()}/>

      </View>)
  }

  if(hasPermission === false) {
    return (
      <View style={styles.container}>
      <Text style= {{margin: 100}}> No access to camera</Text>
      <Button title = {'Allow camera'} onPress={() => askForCameraPermission()}/>
    </View>)
  }

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
  
}

onQRCodeRead = (e) => {
  // para manejar la informacion del codigo QR leido
  console.log(e.data);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 100,

  },
  cameraContainer: {
    flex: 1,
  },
});
