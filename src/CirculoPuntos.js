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



export default function CirculoPuntos(){
    return(
        <LinearGradient colors={['#479A50', '#94C11F']} style={styles.gradient}>
            <View style={styles.circleShape}>
                <Text style = {styles.buttonText}>
                  2200 GreenPoints
                </Text>
            </View>
        </LinearGradient>
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
      borderRadius: 200,
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
    },
    circleShape: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: 'center',
      },
  });
  


