import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { userNavigation, NavigationContainer } from '@react-navigation/native';
import { StackNavigator, createNativeStackNavigator } from '@react-navigation/native-stack';
import { SvgUri } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { Video } from 'expo-av';
import logo from '../images/Externity500x500.png';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();


const StartUp = ({ navigation }) => {
    
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >

        <Ionicons name="alert-circle" style={styles.alertIcon} />

        <View style={styles.buttonContainerSignUp}>
            <TouchableOpacity
            style={styles.buttonRegister}
            onPress= {()=> {
                navigation.navigate('RegisterScreen')
            }
        }
            >
            <Text style={styles.buttonTextSignUp}>REGISTER</Text>
            </TouchableOpacity>
        </View>

        <View>
            <Text style={styles.or}>or</Text>
        </View>

        <View>
            <TouchableOpacity
            style={[styles.buttonLogin, styles.shadow]}
            onPress={() => {
                navigation.navigate('LoginScreen')
            }}
            >
            <Text style={styles.buttonTextLoginIn}>LOG IN</Text>
            </TouchableOpacity>
        </View>
        
        </KeyboardAvoidingView>
    )
}


export default StartUp

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        justifyContent: 'center', 
        alignItems: 'center',
        width: 100,
        height: 100,
        bottom: 140,
      },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    shadow:{
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5,
        
    },
    buttonTextSignUp: {
        fontWeight: '700',
        letterSpacing: 6,
        fontSize: 15,
        color: 'white',
    },
    buttonTextLoginIn: {
        fontWeight: '700',
        letterSpacing: 6,
        fontSize: 15,
        color: '#D80001',
    },
    or: {
        fontWeight: '700',
        paddingVertical: 20,
    },
    buttonRegister: {
        marginTop: 50,
        width: 300,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#D80001',
        borderRadius: 50,
    },
    buttonLogin: {
        width: 300,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
    },
    video: {
        width: '100%'
    },
    alertIcon: {
        fontSize: 32,
        color: '#D80001',
        position: 'absolute',
        top: 45,
        right: 25,
    },
})
