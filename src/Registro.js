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

export default function Registro({ navigation }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = new FormData(e.target);
    /*const Usuario = {
    mail: datos.get("mail"),
    contrasena: datos.get("contrasena"),
    };
    onTomarDatos(Usuario);*/
    navigation.navigate("NavBar");
  };

  return (
    <View style={styles.container}>
          <TextInput style={styles.input} placeholder="Nombre y apellido" />
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput style={styles.input} placeholder="Contraseña" />
          <TextInput style={styles.input} placeholder="Confirmar contraseña" />
          <TextInput style={styles.input} placeholder="Fecha de nacimiento" />
          <LinearGradient
            colors={["#479A50", "#94C11F"]}
            style={styles.gradient}
          >
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.buttonText}>Continuar</Text>
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
    marginBottom: 30,
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
    marginBottom: 10,
    marginTop: 10,
  },
  image: { height: 200, width: 300, resizeMode: "contain" },
});
