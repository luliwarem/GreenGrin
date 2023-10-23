import React, {useEffect, useState} from "react";
import { View, StyleSheet } from "react-native";
import { useContextState } from "./contextState";



export default function CanjearPuntos(navigation) {
    const { contextState, setContextState } = useContextState();

    useEffect(() => {
        if(contextState.userToken == undefined){
          alert("No hay token, por favor vuelva a iniciar sesion")
          navigation.navigate("Login")
        }
      }, []);


    return(
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },})