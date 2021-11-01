import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react';
import { ScrollView, useWindowDimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChartScreen = () => {

    const [usdPrice, setUsdPrice] = useState();
    fetch("https://deep-index.moralis.io/api/v2/erc20/0x8c883ab3509206014cdf97ff66c70738a7e2afc4/price?chain=bsc", {
            headers: {
                "Accept": "application/json",
                "X-Api-Key": "P0kLxT336wnytygCysvwxTIYxi1pd0el2yDPfZwnMd29iYIMtmxeWGH49n20MyJ5"
            }
        })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
            //Success 
            console.log(responseJson.usdPrice);
            setUsdPrice(responseJson.usdPrice);
        })
        .catch((error) => {
            //Error 
            console.error(error);
            return response.json(
            );
        });

    // setInterval(() => {         fetch("https://deep-index.moralis.io/api/v2/erc20/0x8c883ab3509206014cdf97ff66c70738a7e2afc4/price?chain=bsc", {
    //          headers: {
    //              "Accept": "application/json",
    //              "X-Api-Key": "P0kLxT336wnytygCysvwxTIYxi1pd0el2yDPfZwnMd29iYIMtmxeWGH49n20MyJ5"
    //          }
    //      })
    //      .then((response) => response.json())
    //      //If response is in json then in success
    //      .then((responseJson) => {
    //          //Success 
    //          console.log(responseJson.usdPrice);
    //          setUsdPrice(responseJson.usdPrice);
    //      })
    //      .catch((error) => {
    //          //Error 
    //          console.error(error);
    //          return response.json(
    //          );
    //      });
    // }, 10000)

   


    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>Price</Text>
              <Text style={styles.externitytext}>$ {usdPrice}</Text>
            </View>

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

export default ChartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    externitytext: {
        fontSize: 30,
        color: '#D80001'
    },
    centertext: {
        fontSize: 100,
        color: 'brown',
    },
    price: {
        color: 'black',
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
    priceText: {
        color: 'black',
        fontSize: 20,
        marginBottom: 20,
    },
    priceContainer: {
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 50,
        paddingVertical: 40,
        width: '85%',
        backgroundColor: 'white',
    },
    drawerIcon: {
        fontSize: 32,
        color: '#D80001',
        position: 'absolute',
        top: 45,
        left: 25,
    },
})
