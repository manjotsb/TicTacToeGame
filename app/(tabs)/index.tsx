import HomeScreen from "../src/HomeScreen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../src/SettingsScreen";
import UserScreen from "../src/UserScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      // Navigation 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
  );
}