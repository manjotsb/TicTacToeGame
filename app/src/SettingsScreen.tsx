'use client';
import React, {useState} from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState("Joanne Smith");
    const [userImg, setUserImg] = useState(require('../src/assets/ProfilePicture.png'));

    const handleLogout = () => {
        setMessage('Log Out Successfully');
        setUserName("No Name");
        setUserImg(require('../src/assets/Default_pfp.png'));
    }
    const handleSwitchAccount = () => {
        if (userName === "Mo Name") {
            setUserName("Joanne Smith");
            setMessage("Account Switched Successfully to Joanne Smith");
            setUserImg(require('../src/assets/ProfilePicture.png'))
        } else {
            const newUserName = userName === "Joanne Smith" ? "Joe Smith" : "Joanne Smith";
            const newUserImg= userName === "Joanne Smith" ? require('../src/assets/PfpJoe.png') : require('../src/assets/ProfilePicture.png');
            setUserName(newUserName);
            setMessage(`Account Switched Successfully to ${newUserName}`);
            setUserImg(newUserImg);
        }
    };
      
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Settings Page</Text>
            <View style={styles.container}>
                {/* Profile Container */}
                <View style={styles.container}>
                    <Image style={styles.profileImage} source={userImg}/>
                    <Text style={styles.profileName}>{userName}</Text>
                </View>

                {/* Logout Message  */}
                {message ? <Text style={styles.message}>{message}</Text>: null}

                {/* LogOut Button  */}
                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={handleLogout} style={styles.button}>
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSwitchAccount} style={styles.button}>
                        <Text style={styles.buttonText}>Switch Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f8f8f8',
        padding:20,
    },
    profileContainer : {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    message: {
        fontSize: 16,
        flexWrap:'nowrap',
        color: "green",
        marginBottom:20,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText : {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    heading: {
        fontSize:30,
        marginTop:30,
        fontWeight:'bold',
        color: '#333',
    },
})