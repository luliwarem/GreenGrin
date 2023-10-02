import React, {useState} from "react"
import {Text, View, StyleSheet, FlatList} from "react-native"

export default function Historial(navigation) {

    const [historial, setHistorial] = useState([])


    useEffect(() => {
        async function getByUserId(userId) {
          const response = await axios.get(
            `http://localhost:3000/movimientos/user/${id}`
          );
          setHistorial(response.data);
        }
        getByUserId(id);
    }, []);

  const Item = ({ fecha, cantBotellas, puntos }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{fecha}</Text>
      <Text style={styles.title}>{cantBotellas}</Text>
      <Text style={styles.title}>{puntos}</Text>
    </View>
  );

    return(
        <View style={styles.container}>
            
           <FlatList
           data={historial}
           renderItem={({ item }) => (
             <Item fecha={item.fecha} cantBotellas={item.cantBotellas} puntos={item.puntos} />
           )}
           />

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
  