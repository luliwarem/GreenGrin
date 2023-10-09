import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import { LinearGradient } from "expo-linear-gradient";
import logoGreenGrin from "../assets/LogoTerminado.png";

export default function Login({navigation}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = new FormData(e.target);
    const Usuario = {
      mail: datos.get("mail"),
      contrasena: datos.get("contrasena"),
    };
    onTomarDatos(Usuario);
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
          <Image source={logoGreenGrin} style={styles.image} />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
          />
          
          <TouchableOpacity 
          style={styles.invisibleButton} 
          onPress={() => navigation.navigate("Registro")}
          >
            <Text style={styles.quitLogin}>
              ¿No tenes cuenta aún? Registrate aquí
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.invisibleButton2}>
            <Text style={styles.quitLogin}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <LinearGradient
            colors={["#479A50", "#94C11F"]}
            style={styles.gradient}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </LinearGradient>
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    padding: 15,
    width: 330,
    borderRadius: 20,
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: 15,
    placeholderTextColor: "gray",
  },
  quitLogin: {
    color: "#479A50",
    fontWeight: "bold",
    fontSize: 16,
  },
  invisibleButton: {
    marginTop: 10,
  },
  invisibleButton2: {
    marginBottom:10,
    marginTop: 10,
  },
  image: { height: 200, width: 300, resizeMode: "contain" },
});
