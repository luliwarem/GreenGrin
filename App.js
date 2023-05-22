import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Alert } from "react-native-web";
import logoGreenGrin from "./assets/LogoTerminado.png";


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logoGreenGrin} style={styles.image} />
      <TouchableOpacity
      style = {styles.button}
      onPress={()=> console.log("Hola!")}
      >
      <Text style={styles.title}>Ingresar</Text>
      </TouchableOpacity>
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
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10
    
  },
  title: {color: "white"},
  image: { height: 200, width: 300, resizeMode: "contain" },
});
