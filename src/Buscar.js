import React from "react"
import {Text, View, StyleSheet} from "react-native"

export default function Buscar(navigation) {
    return(
        <View style={styles.container}>
            <Text>Busqueda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
  });
  