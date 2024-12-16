"use client";
import React, {useState} from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function UserScreen() {
    const [userName, setUserName] = useState('Joanne Smith');
    const [userEmail, setUserEmail] = useState('joanne.smith@gmail.com');

    return(
        <View style={styles.container}>
            <Text style={styles.profileName}>User Page</Text>
            <View style= {styles.container}>
                <Image style={styles.profileImage} source={require("../src/assets/ProfilePicture.png")}/>
            </View>
            <Text style={styles.profileName}>{userName}</Text>
            <Text style={styles.profileEmail}>{userEmail}</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#f8f8f8',
        padding:20,
    },
    profileContainer: {
        alignItems:'center'
    },
    profileImage: {
        width:100,
        height:100,
        borderRadius:50,
        marginBottom:10,
    },
    profileName: {
        fontSize:20,
        fontWeight:'bold',
        color: '#333',
        marginBottom: 5,
    },
    profileEmail: {
        fontSize:16,
        color:'#777'
    }
})