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
import { useContextState } from "../contextState";

export default function Login({navigation}) {
  const { contextState, setContextState } = useContextState();

  const onSubmitHandler = async (values) => {
    useEffect(() => {
      async function getUserByEmail(values) {
        const response = await axios.get(
          `http://localhost:80/user/`,{ params: { Email: values.email, Password: values.password } }
        )
        if(response="error"){
          alert("Error! El mail o la ocntraseña son incorrectos, intente nuevamente")
        }else{
          setContextState({ newValue: response.data, type: "SET_USER" });
          const token = await await axios.get(`http://localhost:80/auth/login`,);
          setContextState({ newValue: token, type: "SET_USER_TOKEN" });
          console.log(token)
          navigation.navigate("HomeScreen")
        }
      }
      getUserByEmail(values);
    }, []);
    }

  const handleKeyPress = (event, values) => {
    if(event.key === 'Enter'){
      onSubmitHandler(values)    }
  }

  return (
    <Formik initialValues={{ email: '', password: ''}} onSubmit={onSubmitHandler}>
       {({ handleSubmit, handleChange, handleBlur, values  }) => (
        <View style={styles.container}>
          <Image source={logoGreenGrin} style={styles.image} />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            onKeyPress={(e) => handleKeyPress(e, values)}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Contraseña"
            onKeyPress={(e) => handleKeyPress(e, values)}
          />
          <LinearGradient
            colors={["#479A50", "#94C11F"]}
            style={styles.gradient}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity style={styles.invisibleButton}>
            <Text style={styles.quitLogin}>
              ¿No tenes cuenta aún? Registrate aquí
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.invisibleButton}>
            <Text style={styles.quitLogin}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
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
  image: { height: 200, width: 300, resizeMode: "contain" },
});
