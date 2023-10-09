import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import axios from "axios";

export default function Historial(navigation) {
  const [historial, setHistorial] = useState([]);
  const id = 1;

  useEffect(() => {
    async function getByUserId(id) {
      const response = await axios.get(
        `http://localhost:80/movimientos/user/${id}`
      );
      setHistorial(response.data);
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

  return (
    <View style={styles.container}>
      {console.log(historial)}
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
