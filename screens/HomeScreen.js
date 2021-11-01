import { useNavigation } from '@react-navigation/core'
import {useTheme} from 'react-native-paper';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { ImageBackground, TextInput, Pressable, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome back, {auth.currentUser?.displayName}</Text>

        <Ionicons name="menu" style={styles.drawerIcon} />

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

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    drawerIcon: {
        fontSize: 32,
        color: '#D80001',
        position: 'absolute',
        top: 45,
        left: 25,
    },
})
