"use client";
import React, {useState} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

//This Page displays the user info
export default function UserScreen() {
    const [userName, setUserName] = useState('Joanne Smith');
    const [userEmail, setUserEmail] = useState('joanne.smith@gmail.com');

    return(
        <>
            <View style={styles.container}>
                {/* Heading  */}
                <SafeAreaView>
                    <Text style={styles.heading}>User Page</Text>
                </SafeAreaView>
                {/* User Info  */}
                <SafeAreaView style={styles.profileContainer}>
                    <Image style={styles.profileImage} source={require("../src/assets/ProfilePicture.png")}/>
                    <Text style={styles.profileName}>{userName}</Text>
                    <Text style={styles.profileEmail}>{userEmail}</Text>
                </SafeAreaView>
            </View>
        </>
    );
}


//Styles
const styles= StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#f8f8f8',
        padding:20,
    },
    profileContainer: {
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        flexDirection:'column',
    },
    profileImage: {
        width:100,
        height:100,
        borderRadius:50,
        marginBottom:10,
    },
    heading: {
        fontSize:30,
        position:'absolute',
        top:-250,
        right:-75,
        fontWeight:'bold',
        color: '#333',
        marginBottom: 5,
    },
    profileName: {
        fontSize:20,
        fontWeight:'bold',
        color: '#333',
        marginBottom: 5,
        textAlign:'center',
    },
    profileEmail: {
        fontSize:16,
        color:'#777',
        textAlign:'center',
    }
})