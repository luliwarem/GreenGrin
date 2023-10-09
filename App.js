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
import Registro from "./src/Registro"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./src/HomeScreen";
import QRScanner from "./src/QRScanner";
import Buscar from "./src/Buscar"
import Historial from "./src/Historial"
import CanjearPuntos from "./src/CanjearPuntos";
import NavBar from "./src/NavBar";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
        />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
        />
      
      </Stack.Navigator>
    </NavigationContainer>
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
