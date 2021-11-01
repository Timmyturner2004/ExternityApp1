import React, { useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import { auth } from '../firebase';




const RegisterScreen = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('HomeScreen')
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            var user = userCredentials.user;
            user.updateProfile({
                displayName: name,
            }).then (function () {

            })
            console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }


    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
        >
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />

        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={handleSignUp}
            style={styles.button}
            >
            <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>


        </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        height: '100%',
        backgroundColor: 'white',
        paddingTop: '80%',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5,
    },
    buttonContainer: {
        marginTop: 50,
        width: '60%',
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#D80001',
        borderRadius: 50,
    },
    buttonText: {
        fontWeight: '700',
        letterSpacing: 6,
        fontSize: 15,
        color: 'white',
    },
})
