import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/HomeScreen";
import SettingsScreen from "../src/SettingsScreen";
import UserScreen from "../src/UserScreen";

const stack= createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="Home">
                <stack.Screen name="Home" component={HomeScreen} options={{title:"Tic Tac Toe"}}/>
                <stack.Screen name="User" component={UserScreen} options={{title:"Tic Tac Toe"}}/>
                <stack.Screen name="Settings" component={SettingsScreen} options={{title:"Tic Tac Toe"}}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}