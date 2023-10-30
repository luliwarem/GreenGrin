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




export default function Acreditacion() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#479A50', '#94C11F']} style={styles.gradient}>
                <View style={styles.circleShape}>
                    <Text style={styles.buttonText1}>
                        Acreditación exitosa
                    </Text>
                    <Text style={styles.buttonText2}>
                        Usted ha sumado 600 puntos
                    </Text>
                </View>
            </LinearGradient>
            <View style={styles.container2}>
                <Text style={styles.buttonText3}>Tu aporte es muy importante para cuidar el planeta! </Text>
            </View>
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
    container2: {
        width: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
    buttonText1: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    buttonText2: {
        fontSize: 17,
        color: "white",
        fontWeight: "bold",
    },
    buttonText3: {
        fontSize: 17,
        justifyContent: "center",
        alignItems: "center",
        color: '#479A50',
        fontWeight: "bold",
        paddingTop: 20,
    },
    circleShape: {
        width: 250,
        height: 250,
        justifyContent: "center",
        alignItems: 'center',
    },
});



