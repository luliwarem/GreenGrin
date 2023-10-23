import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import { useContextState } from "./contextState";


export default function Historial(navigation) {
  const { contextState, setContextState } = useContextState();

  const [historial, setHistorial] = useState([]);
  const id = contextState.user.Id;

  useEffect(() => {
    async function getByUserId(id) {
      const response = await axios.get(
        `https://greengrin-backend-dev-ebes.1.us-1.fl0.io/movimientos/user/${id}`
      );
      setHistorial(response.data);
      console.log(response.data)
    }
    getByUserId(id);
  }, []);

  const Item = ({ fecha, cantBotellas, puntos }) => (
    <View style={styles.item}>
      <Text style={styles.title}>Fecha: {fecha}</Text>
      <Text style={styles.title}>Botellas ingresadas: {cantBotellas}</Text>
      <Text style={styles.title}>Puntos obtenidos: {puntos}</Text>
    </View>
  );

  useEffect(() => {
    if(contextState.userToken == undefined){
      alert("No hay token, por favor vuelva a iniciar sesion")
      navigation.navigate("Login")
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={historial}
        renderItem={({ item }) => (
          <Item
            fecha={item.Fecha}
            cantBotellas={item.CantBotellas}
            puntos={item.Puntos}
          />
        )}
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
  },  item: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
