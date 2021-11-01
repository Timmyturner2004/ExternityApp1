import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen';
import StartUp from './screens/StartUp';
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen.js';
import ChartScreen from './screens/ChartScreen.js';
import EditProfileScreen from './screens/EditProfileScreen.js';
import ChatScreen from './screens/ChatScreen.js';
import Price from './getexternityprice'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name="StartUp" component={StartUp} />
      <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{headerShown: false}} name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen options={{headerShown: false}} name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen options={{headerShown: false}} name="ChartScreen" component={ChartScreen} />
      <Stack.Screen options={{headerShown: false}} name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen options={{headerShown: false}} name="ChatScreen" component={ChatScreen} />

    </Stack.Navigator>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  
});
