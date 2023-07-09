import { View, Text, Button, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Learn More About Me"
                onPress={() => navigation.navigate('About')}
            />
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
});