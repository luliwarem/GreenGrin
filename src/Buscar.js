import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    TextInput,
} from "react-native";

export default function Buscar(navigation) {
    const [input, setInput] = useState();
    const paraTi = [
        { id: '1', imageUrl: 'https://seeklogo.com/images/E/easy-logo-3360580055-seeklogo.com.png' },
        { id: '2', imageUrl: 'https://i.pinimg.com/originals/ac/50/69/ac5069bf24916dfb4b4ef34bcf3919e2.jpg' },
        { id: '3', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_879957-MLA69998218581_062023-O.webp' },
        { id: '4', imageUrl: 'https://boardinggate.com.sg/wp-content/uploads/Jansport-Logo.png' },
    ];
    const masCanjeados = [
        { id: '1', imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/181109204242-mercado-libre-estrategias-longobardi-full-169.jpg' },
        { id: '2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6Zp5XxPgUm8lZZNcU48eL-XkpGYzKIeZtcYdUOkj&s' },
        { id: '3', imageUrl: 'https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/303614865_431303932518726_4547614858933334139_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WLj1fNhYtYoAX-Ab2fg&_nc_ht=scontent.faep9-1.fna&oh=00_AfDOOIq_-O8l54SsmX6rABzj30QDu2vYkE2h0fnS7aR50Q&oe=6544C6F6' },
        { id: '4', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png' },
    ];
    const supermercados = [
        { id: '1', imageUrl: 'https://play-lh.googleusercontent.com/6e58KXZ5ReU8xEzG8WcCkD54OlQigo6DiPEgDGOj2pwDCq8iJQ_6CUXcN-KqD4xTmxE=w240-h480-rw' },
        { id: '2', imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/229/173/themes/common/logo-995149143-1684808316-b32fe4e4bac2be9183131f5a553fe2641684808316.png?0' },
        { id: '3', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6Zp5XxPgUm8lZZNcU48eL-XkpGYzKIeZtcYdUOkj&s' },
        { id: '4', imageUrl: 'https://images.rappi.com.ar/marketplace/disco-1596169950.png' },
    ];
    const indumentaria = [
        { id: '1', imageUrl: 'https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/303614865_431303932518726_4547614858933334139_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WLj1fNhYtYoAX-Ab2fg&_nc_ht=scontent.faep9-1.fna&oh=00_AfDOOIq_-O8l54SsmX6rABzj30QDu2vYkE2h0fnS7aR50Q&oe=6544C6F6' },
        { id: '2', imageUrl: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5362a828-0f5b-4d17-a6c5-d0677dc89baa_1000x1000.jpeg' },
        { id: '3', imageUrl: 'https://i.pinimg.com/originals/ac/50/69/ac5069bf24916dfb4b4ef34bcf3919e2.jpg' },
        { id: '4', imageUrl: 'https://media.licdn.com/dms/image/C4D0BAQF2bk3WtXXZ6Q/company-logo_200_200/0/1519862157902?e=2147483647&v=beta&t=nKauhGhNeo4-V6HU_wdEpSKwnTssGAUYqlWC_d0k270' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image style={styles.icon} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAxE5WAlXELrGs_ZziYintjtDDx6fMl6qNPHEhzsJ2Y6FDd1PuOdono4ROi5jEINsNws&usqp=CAU" }} />
                <TextInput
                    style={styles.input}
                    placeholder="Buscar"
                    value={input}
                />
            </View>
            <Text style={styles.items}>Los más canjeados</Text>
            <ScrollView
                horizontal={true}
                style={styles.scroll}
            >
                <FlatList
                    data={masCanjeados}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        </View>
                    )}
                />
            </ScrollView>
            <Text style={styles.items}>Recomendaciones para ti</Text>
            <ScrollView
                horizontal={true}
                style={styles.scroll}
            >
                <FlatList
                    data={paraTi}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        </View>
                    )}
                />
            </ScrollView>
            <Text style={styles.items}>Supermercados</Text>
            <ScrollView
                horizontal={true}
                style={styles.scroll}
            >
                <FlatList
                    data={supermercados}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        </View>
                    )}
                />
            </ScrollView>
            <Text style={styles.items}>Indumentaria</Text>
            <ScrollView
                horizontal={true}
                style={styles.scroll}
            >
                <FlatList
                    data={indumentaria}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        </View>
                    )}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    container2: {
        flexDirection: 'row', // Horizontal layout
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 16,
        paddingRight: 16,
    },
    icon: {
        marginLeft: 30,
        marginTop: -5,
        marginRight: 5,
        width: 30,
        height: 30,
    },
    items: {
        fontSize: 18,
        marginTop: 10,
        color: "green",
        fontWeight: "bold",
        width: 370,
        margin: 10,
    },
    estaciones: {
        fontSize: 17,
        color: "green",
        fontWeight: "bold",
        width: 370,
        margin: 10,
    },
    listItem: {
        marginHorizontal: 10,
    },
    imageContainer: {
        marginHorizontal: 5,
    },
    image: {
        width: 117,
        height: 117,
        borderRadius: 10,
    },
    mapa: {
        width: 370,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    scroll: {
        marginLeft: 15,
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
        marginTop:5,
        marginBottom: 15,
        placeholderTextColor: "gray",
    },
});
