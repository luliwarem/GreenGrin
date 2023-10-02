import React, {useState} from "react"
import {Text, View, StyleSheet, FlatList} from "react-native"

export default function Historial(navigation) {

    const [historial, setHistorial] = useState([])


    useEffect(() => {
        const id = route.params.id;
        async function getById(id) {
          const response = await axios.get(
            `http://localhost:3000/movimientos/${id}/information?apiKey=16e51661dd5e48d3aabf05fb9a637d13`
          );
          setPlatoElegido(response.data);
        }
        getById(id);
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
           keyExtractor={(item) => item.id}
           
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
  