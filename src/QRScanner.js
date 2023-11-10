import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { CurrentRenderContext } from "@react-navigation/native";
import axios from "axios";
import { useContextState } from "./contextState";


// npm install react-native-camera react-native-qrcode-scanner
// import { RNCamera } from 'react-native-camera'

export default function QRScanner({ navigation }) {
  const { contextState, setContextState } = useContextState();

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

  //=========================================== ABRIR CAMARA ===========================================
  const onQRCodeRead = () => {
    console.log(
      [idEstacion, idUsuario, botellasIngresadas, date, puntos].join(" - ")
    );
    console.log("ïdEstacion:", idEstacion);
    console.log("botellasIngresadas:", botellasIngresadas);  

    fetchData(idEstacion, idUsuario, date, botellasIngresadas, puntos);/*
  fetchData2(puntos);*/
  };

  useEffect(() => {
    // fetchData(1, 1, 0, new Date(), 0);
    BarCodeScanner.requestPermissionsAsync()
      .then((res) => {
        console.log(res);
        setHasPermission(res.granted === "granted");
      })
      .catch((error) => console.log());
  }, []);

  //=========================================== LEER QR ===========================================

  useEffect(() => {
    if(idEstacion!=null){

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
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentDay}-${currentMonth}`;
    setDate(currentDate)
    setPuntos(obj.botellas * 100);
    setIdUsuario(1);
  };

  //=========== POSTEAR EN API ==============================================
  /*
    const fetchData2 = (puntos) => {
      axios
        .put("https://greengrin-backend-dev-ebes.1.us-1.fl0.io/user/1", { puntos: puntos })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  */
  const fetchData = (idEstacion, idUsuario, date, botellasIngresadas, puntos) => {
    console.log("Llamando a movimientos");
    axios.post("https://greengrin-backend-dev-ebes.1.us-1.fl0.io/movimientos",{
      Id_Estaciones : idEstacion,
      Id_Usuario: idUsuario,
      Fecha: date,
      CantBotellas: botellasIngresadas,
      Puntos: puntos
  })
      .then((response) => {
        console.log("rta de movimientos: ");
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  //============== RETURN =====================================================
  useEffect(() => {
    if (contextState.userToken == "") {
      alert("No hay token, por favor vuelva a iniciar sesion")
      navigation.navigate("Login")
    }
  }, []);

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
    overflow: 'hidden',
    color: "#FFFFFF",
    textAlign: "center",
    padding: 10,
    margin: -85,
    fontWeight: "bold",
    backgroundColor: "#479A50",
    borderRadius: 10,
  },
});
