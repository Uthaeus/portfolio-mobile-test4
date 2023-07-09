import { View, Text, Button, StyleSheet, Image } from "react-native";

import image from '../assets/images/hammer-thumb.jpg';

function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Home Screen</Text>
                <Image source={image} style={styles.headerImg} />
            </View>

            <View style={styles.linkContainer}>
                <View style={[styles.linkBtn, styles.aboutBtn]}>
                    <Button
                        title="About Me"
                        onPress={() => navigation.navigate('About')}
                    />
                </View>
                <View style={[styles.linkBtn, styles.contactBtn]}>
                    <Button 
                        title="Contact Me"
                        onPress={() => navigation.navigate('Contact')}
                    />
                </View>
            </View>
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
    },
    linkContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    btn: {
        color: '#121212',
        fontSize: 12,
    },
    header: {
        width: '75%',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 10,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#121212',
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#121212',
    },
    linkBtn: {
        fontSize: 8,
        color: '#121212',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 3,
    },
    aboutBtn: {
        backgroundColor: 'green',
    },
    contactBtn: {
        backgroundColor: 'blue',
    },
    headerImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
});