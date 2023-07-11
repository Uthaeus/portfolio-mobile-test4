import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function BlogStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ HomeScreen } />
            <Stack.Screen name="About" component={ AboutScreen } />
            <Stack.Screen name="Contact" component={ ContactScreen } />
        </Stack.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="About" component={ AboutScreen } />
        <Stack.Screen name="Contact" component={ ContactScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
