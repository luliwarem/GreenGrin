import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { CurrentRenderContext } from "@react-navigation/native";
import axios from "axios";

// npm install react-native-camera react-native-qrcode-scanner
// import { RNCamera } from 'react-native-camera'

export default function QRScanner({ navigation }) {
  const [date, setDate] = useState();
  const [idEstacion, setIdEstacion] = useState();
  const [botellasIngresadas, setBotellasIngresadas] = useState();
  const [puntos, setPuntos] = useState();
  const [idUsuario, setIdUsuario] = useState();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const [qrscan, setQrscan] = useState("No result");
  const [scanResults, setScanResults] = useState([]);
  
//==================== ABRIR CAMARA ===========================================

  const onQRCodeRead = (e) => {
    console.log(
      [idEstacion, idUsuario, botellasIngresadas, date, puntos].join(" - ")
    );
    fetchData(idEstacion, idUsuario, botellasIngresadas, date, puntos);
    fetchData2(puntos);
  };

  const askForCameraPermission = () => {
    (async () => {
    })();
  };

  useEffect(() => {
    fetchData(1, 1, 0, new Date(), 0);
    BarCodeScanner.requestPermissionsAsync()
      .then((res) => {
        console.log(res);
        setHasPermission(res.granted === "granted");
      })
      .catch((error) => console.log());
  }, []);

//============== LEER QR ===================================================

  useEffect(() => {
    console.log(
      [idEstacion, idUsuario, botellasIngresadas, date, puntos].join(" - ")
    );
    if (idEstacion) {
      onQRCodeRead();
    }
  }, [idEstacion, idUsuario, botellasIngresadas, date, puntos]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData: " + data);
    console.log("TIPO!!!!", typeof data);
    const obj = JSON.parse(data);
    console.log("OBJ!!!!", obj);
    setBotellasIngresadas(obj.botellas);
    setIdEstacion(obj.idEstacion); // Maneja la respuesta de la API
    setDate(Date.now());
    setPuntos(obj.botellas * 100);
    setIdUsuario(1);
  };

  //=========== POSTEAR EN API ==============================================

  const fetchData2 = (puntos) => {
    axios
      .put("http://10.152.2.134:3000/user/1", { puntos: puntos })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchData = (idEstacion, idUsuario, botellasIngresadas, date, puntos) => {
    console.log("Llamando a movimientos");
    axios.post("http://localhost:3000/movimientos/", {
        Id_Estaciones: idEstacion,
        Id_Usuario: idUsuario,
        Fecha: date,
        CantBotellas: botellasIngresadas,
        Puntos: puntos,
      })
      .then((response) => {
        console.log("rta de movimientos: ");
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

//============== RETURN =====================================================

  if (hasPermission === null) {
    return (
      <View style={styles.cameraContainer}>
        <Text> Requesting for camera permission</Text>
        <Button
          title={"Allow camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  } else {
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
}

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
    backgroundColor: "#469735",
  },
  escanea: {
    color: "#FFFFFF",
    width: 200,
    margin: -85,
    fontWeight: 600,
    backgroundColor: "#479A50",
  },
});

//puntos = lo q me mando el qr x 100, pegarle a la api y con fetch, post mov estacion y idusuario, fecha, cantbotellas del qr y punto, lo q calcule, llamo al post de la api para insertareesto.
//lo mismo con usuarios con sus propios campos, update los puntos. llamar al endpoint de update
