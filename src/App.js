import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from "react-native";
import { Alert } from "react-native-web";
import Login from "./Login"
import { useState } from "react";


export default function App() {
  
  function Ingresar(Usuario){}
  const[Usuario, setUsuario] = useState('')
  
  return (
    <View style={styles.container}>
      <Login onIngresar = {Ingresar} />
    </View>
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
