import { Text, View, StyleSheet } from "react-native";

function ContactScreen() {
  return (
    <View style={styles.container}>
        <Text>Contact Screen</Text>
    </View>
  );
}

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: "center",
    },
});