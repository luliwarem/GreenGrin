import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CirculoPuntos from "./CirculoPuntos";
import NavBar from "./NavBar";
import QRScanner from "./QRScanner";

export default function HomeScreen(navigation) {
    return(
        <View style={styles.container}>
            <CirculoPuntos></CirculoPuntos>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("QRScanner")}>
              <Text style={styles.buttonText}>Escanear</Text>
            </TouchableOpacity>

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
    button: {
      alignItems: "center",
      padding: 15,
      paddingHorizontal: 80,
      borderRadius: 20,
      
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    gradient: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    buttonText: {
      color: "green",
      fontWeight: "bold",
    },
    circleShape: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        justifyContent: "center",
        alignItems: 'center',
      },
  });
  


