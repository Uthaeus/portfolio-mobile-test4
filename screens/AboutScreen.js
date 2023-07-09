import { View, Text, StyleSheet } from "react-native"

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  )
}

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        color: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
});