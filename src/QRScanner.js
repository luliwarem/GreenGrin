import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { CurrentRenderContext } from "@react-navigation/native";
import { axios } from "axios";

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

  const askForCameraPermission = () => {
    (async () => {
      const status = await BarCodeScanner.requestPermissionsAsync()
        .then((res) => console.log(res))
        .catch((error) => console.log());
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData: " + data);
  };

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
  }


  useEffect(() => {
    async function fetchData() {
      const response = axios
        .post("https://10.152.2.134:3000/movimientos/", {
          idEstacion: idEstacion,
          idUsuario: idUsuario,
          botellasIngresadas: botellasIngresadas,
          fecha: date,
          puntos: puntos,
        })
        .then((response) => {
          // Maneja la respuesta de la API
          console.log(response.data);
        })
        .catch((error) => {
          // Maneja el error en caso de fallo de la solicitud
          console.error(error);
        });
    }
     // ejecutamos la función de búsqueda de datos
  }, []);


  useEffect(() => {
    async function fetchData2() {
      const response = axios
        .put("https://10.152.2.134:3000/user/1", { puntos: puntos })
        .then((response) => {
          // Maneja la respuesta de la API
          console.log(response.data);
        })
        .catch((error) => {
          // Maneja el error en caso de fallo de la solicitud
          console.error(error);
        });
    }
     // ejecutamos la función de búsqueda de datos
  }, []);

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
  console.log(e.data.botellas);
  fetchData();
  fetchData2();
  //usar el set de idestacion y el de botellas para setearlo para que se pueda postear en movimientos, y calcular puntos para updatear en usuario y en mov.
  //sacar la fecha y hora de hoy y setearlo en date, cuando alguien escanea el qr. tambien lo posteo en mov
  //ademas posteo en mov
};

const handleScan = (data) => {
  if (data) {
    setScanResults([...scanResults, data]);
  }
};

const handleError = (err) => {
  console.error(err);
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
