import { useNavigation } from '@react-navigation/core'
import {useTheme} from 'react-native-paper';
import React, {useState, useCallback, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { ImageBackground, TextInput, Pressable, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GiftedChat } from 'react-native-gifted-chat';
import { firebase } from '@firebase/firestore';
import Database from '../utilities/Database';





const ChatScreen = () => {

    const [messages, setMessages] = useState([]);

    const navigation = useNavigation()

    console.log(db)

    const db = new Database();
    

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const { _id, createdAt, text, user,} = messages[0]


        db.insert("chats", {
            text: text,
            user: user,
            createdAt: createdAt
        }, _id);

    }, []);

      useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])

    return (
        <View style={styles.container}>

<GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
            }}
        />

<Pressable style={styles.headerIcon} onPress={() => {
            navigation.replace("ProfileScreen")
        }} android_ripple={{borderless: true, radius: 1000}}>
        <Ionicons name="arrow-back-outline" style={styles.drawerIcon} />
        </Pressable>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    },
    headerIcon: {
        position: 'absolute',
        top: 45,
        left: 25,
    }
})
