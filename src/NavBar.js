import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "./HomeScreen";
import Buscar from "./Buscar";
import Historial from "./Historial";
import QRScanner from "./QRScanner";
import CanjearPuntos from "./CanjearPuntos";
import Acreditacion from "./Acreditacion";

//Screen names
const homeName = "Home";
const buscarName = "Buscar";
const historialName = "Historial";
const qrScannerName = "qrScanner";
const canjearPuntosName = "CanjearPuntos";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === buscarName) {
              iconName = focused ? "search" : "search-outline";
            } else if (rn === qrScannerName) {
              iconName = focused ? "qr-code" : "qr-code-outline";
            } else if (rn === historialName) {
              iconName = focused ? "time" : "time-outline";
            } else if (rn === canjearPuntosName) {
              iconName = focused ? "wallet" : "wallet-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#479A50",
          inactiveTintColor: "gray",
          labelStyle: { fontSize: 10 },
          tabBarStyle: { padding: 10, height: 100 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name={buscarName} component={Buscar} options={{ headerShown: false }}/>
        <Tab.Screen name={qrScannerName} component={Acreditacion} options={{ headerShown: false }}/>
        <Tab.Screen name={historialName} component={Historial} options={{ headerShown: false }}/>
        <Tab.Screen name={canjearPuntosName} component={CanjearPuntos} options={{ headerShown: false }}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: "15%",
  },
  botoncito: {
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding: 10,
    fontFamily: "sans-serif",
    marginBottom: 10,
  },

  gradient: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
