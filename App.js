import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Login from "./src/Login";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./src/HomeScreen";
import QRScanner from "./src/QRScanner";

const Stack = createNativeStackNavigator();

export default function App() {
  function Ingresar(Usuario) {
    alert("hola");
  }
  const [Usuario, setUsuario] = useState("");

  return (
    <QRScanner></QRScanner>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
