import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput, 
  Pressable
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons'; 




export default function NavBar() {
    return(
      <LinearGradient colors={['#479A50', '#94C11F']} style={styles.gradient}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.botoncito} onPress={()=>navigation.navigate("HomeScreen")}>
      <MaterialIcons name="home" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botoncito} onPress={()=>navigation.navigate("Buscar")}>
      <MaterialIcons name="search" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botoncito} onPress={()=>navigation.navigate("QRScanner")}>
      <MaterialIcons name="qr-code-2" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botoncito} onPress={()=>navigation.navigate("HistorialDeMovimientos")}>
      <MaterialIcons name="history" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botoncito} onPress={()=>navigation.navigate("CanjearPuntos")}>
      <MaterialIcons name="loyalty" size={24} color="black" />
      </TouchableOpacity>
      </View>
      </LinearGradient>
    )
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
    marginBottom: 10
  },
  
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
})
