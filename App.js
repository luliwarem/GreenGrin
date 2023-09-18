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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import QRScanner from "./src/QRScanner";
import Buscar from "./src/Buscar"
import Historial from "./src/Historial"
import CanjearPuntos from "./src/CanjearPuntos";
import NavBar from "./src/NavBar";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavBar style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="QRScanner"
            component={QRScanner}
            options={{ title: "QRScanner" }}
          />
          <Stack.Screen
            name="Buscar"
            component={Buscar}
            options={{ title: "Buscar" }}
          />
          <Stack.Screen
            name="HistorialDeMovimientos"
            component={Historial}
            options={{ title: "Historial De Movimientos" }}
          />
          <Stack.Screen
            name="CanjearPuntos"
            component={CanjearPuntos}
            options={{ title: "Canjear Puntos" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </NavBar>
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
