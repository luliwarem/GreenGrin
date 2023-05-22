import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import logoGreenGrin from "./assets/LogoTerminado.png"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proyecto final!</Text>
      <Image
        source={logoGreenGrin}
        style={styles.image}
      />
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
  title: { fontSize: 30, color: "darkolivegreen" },
  image:{height:"20%", width:"100%"}

});
