import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect} from 'react'
import { Pressable, Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import * as ImagePicker from 'expo-image-picker';
import UserPermissions from '../utilities/Userpermission'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fire from '../Fire'


const ProfileScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("StartUp")
        })
        .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>

<Pressable style={styles.headerIcon1} onPress={() => {
            navigation.replace("EditProfileScreen")
        }} android_ripple={{borderless: true, radius: 1000}}>
            <Ionicons name="settings-outline" style={styles.settingIcon} />
            </Pressable>
            
            <Pressable style={styles.headerIcon2} onPress={() => {
            navigation.replace("EditProfileScreen")
        }} android_ripple={{borderless: true, radius: 1000}}>
        <Ionicons name="menu" style={styles.drawerIcon} />
        </Pressable>


            <Text style={styles.text}>Email: {auth.currentUser?.email} </Text>
            <Text style={styles.text}>UID: {auth.currentUser?.uid} </Text>
            <Text style={styles.text}>Name: {auth.currentUser?.displayName} </Text>
            <TouchableOpacity style={styles.signOutButtonContainer}
            onPress={handleSignOut}
            >
                <Text style={styles.signOut}>Sign Out</Text>
            </TouchableOpacity>

            <View style={styles.navContainer}>
            <View style={styles.navBar}>
            <Pressable onPress={() => {
            navigation.replace("HomeScreen")
        }} style={styles.IconBehave} android_ripple={{borderless: true, radius: 50}}>
            <Ionicons name="home" style={styles.icons} />
            </Pressable>

            <Pressable onPress={() => {
            navigation.replace("ChartScreen")
        }} style={styles.IconBehave} android_ripple={{borderless: true, radius: 50}}>
            <Ionicons name="stats-chart-outline" style={styles.icons} />
            </Pressable>

            <Pressable onPress={() => {
            navigation.replace("ChatScreen")
        }} style={styles.IconBehave} android_ripple={{borderless: true, radius: 50}}>
            <Ionicons name="chatbox-ellipses-outline" style={styles.icons} />
            </Pressable>

            <Pressable onPress={() => this.changeText('Favourites')} style={styles.IconBehave} android_ripple={{borderless: true, radius: 50}}>
            <Ionicons name="wallet-outline" style={styles.icons} />
            </Pressable>

            <Pressable onPress={() => {
            navigation.replace("ProfileScreen")
        }} style={styles.IconBehave} android_ripple={{borderless: true, radius: 50}}>
            <Ionicons name="person-outline" style={styles.icons} />
            </Pressable>
            </View>
        </View>

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    signOutButtonContainer: {
        marginTop: 50,
        width: 200,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#D80001',
        borderRadius: 50,
    },
    signOut: {
        fontWeight: '700',
        letterSpacing: 6,
        fontSize: 15,
        color: 'white',
    },
    navContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#D80001',
        width: '100%',
        justifyContent: 'space-evenly',
    },

    IconBehave: {
        padding: 14,
    },
    icons: {
        fontSize: 26,
        color: 'white',
    },
    settingIcon: {
        fontSize: 32,
        color: '#D80001',
    },
    drawerIcon: {
        fontSize: 32,
        color: '#D80001',
    },
    headerIcon1: {
        position: 'absolute',
        top: 45,
        right: 25,
    },
    headerIcon2: {
        position: 'absolute',
        top: 45,
        left: 25,
    },
})
