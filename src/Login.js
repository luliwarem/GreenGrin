import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useContextState } from "./contextState";

export default function Login({ navigation }) {
  const { contextState, setContextState } = useContextState();
  const [incorrecto, setIncorrecto] = useState(false);

  const onSubmitHandler = async (values) => {
    async function getUserByEmail(values) {
      console.log(values);
      const response = await axios.get(
        `https://greengrin-backend-dev-ebes.1.us-1.fl0.io/user/`,
        {
          params: { Mail: values.email, Contrasena: values.password },
        }
      );
      if (response.data === "Error") {
        setIncorrecto(true);
      } else {
        setContextState({ newValue: response.data[0], type: "SET_USER" });
        const token = await axios.get(
          `https://greengrin-backend-dev-ebes.1.us-1.fl0.io/auth/login`
        );
        setContextState({ newValue: token, type: "SET_USER_TOKEN" });
        navigation.navigate("NavBar");
      }
    }
    getUserByEmail(values);
  };

  const handleKeyPress = (event, values) => {
    if (event.key === "Enter") {
      onSubmitHandler(values);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmitHandler}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <View>
            <Image source={logoGreenGrin} style={styles.image} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              onKeyPress={(e) => handleKeyPress(e, values)}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="Contraseña"
              onKeyPress={(e) => handleKeyPress(e, values)}
            />
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
        )}
      </Formik>

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
      ></LinearGradient>

      {incorrecto && (
        <Text style={styles.usuarioIncorrecto}>
          Usuario o contraseña incorrectos, intentelo nuevamente!
        </Text>
      )}
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
    marginBottom: 10,
    marginTop: 10,
  },
  image: { height: 200, width: 300, resizeMode: "contain" },
  usuarioIncorrecto: {
    color: "red",
  },
});
