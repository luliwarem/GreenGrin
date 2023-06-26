import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Login from "./Login";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  function Ingresar(Usuario) {
    alert("hola");
  }
  const [Usuario, setUsuario] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen style={styles.container}
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen style={styles.container}
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        >

        </Stack.Screen>
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
