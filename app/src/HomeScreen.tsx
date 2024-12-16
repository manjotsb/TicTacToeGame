import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, FlatList, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity} from "react-native";


import UserScreen from "./UserScreen";
import SettingsScreen from "./SettingsScreen";

const {height} = Dimensions.get('window');

export default function HomeScreen({navigation,route} : {navigation:any; route:any}):React.JSX.Element {
  const boxes=['','','','','','','','',''];
  const [array, setArray] = useState(boxes);
  const [message, setMessage] = useState('');
  const HorizontalMatches = (tempArray: string | any[], value: string) => {
    if (tempArray[0] === value && tempArray[1] === value && tempArray[2] === value) {
      setMessage(`Player ${value} Wins!`);
    }
    if (tempArray[3] === value && tempArray[4] === value && tempArray[5] === value) {
      setMessage(`Player ${value} Wins!`);
    }
    if (tempArray[6] === value && tempArray[7] === value && tempArray[8] === value) {
      setMessage(`Player ${value} Wins!`);
    }
  }
  const VerticalMatches =(tempArray: string | any[], value: string) => {
    if (tempArray[0] === value && tempArray[3] === value && tempArray[6] === value) {
      setMessage(`Player ${value} Wins!`);
    }
    if (tempArray[1] === value && tempArray[4] === value && tempArray[7] === value) {
      setMessage(`Player ${value} Wins!`);
    }
    if (tempArray[2] === value && tempArray[5] === value && tempArray[8] === value) {
      setMessage(`Player ${value} Wins!`);
    }
  }
  const DiagonalMatches =(tempArray: string | any[], value: string) => {
    if (tempArray[0] === value && tempArray[4] === value && tempArray[8] === value) {
      setMessage(`Player ${value} Wins!`);
    }
    if (tempArray[2] === value && tempArray[4] === value && tempArray[6] === value) {
      setMessage(`Player ${value} Wins!`);
    }
  }

  const getWinner = (tempArray: string | any[], value: string) => {
    if (tempArray.length <=0) {return false;}

    HorizontalMatches(tempArray,value);
    VerticalMatches(tempArray,value);
    DiagonalMatches(tempArray,value);
  }

  const handlePress = (index: number) => {
    if (array[index] !== "" || message !== "") return;
    const value = array.filter((x) => x !== "").length % 2 === 0 ? "X" : "O";
    const newArray = [...array];
    newArray[index] = value;
    setArray(newArray);
    getWinner(newArray, value);
    
  };

  const ResetGame = () => {
    setArray(boxes);
    setMessage('');
  }


  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}/>
      <SafeAreaView style={styles.topTextCtn}>
        <Text style={styles.topText}>Tic Tac Toe</Text>
      </SafeAreaView>
      <StatusBar/>
      <SafeAreaView style={styles.ScreenContainer}>
        <View style={styles.TicTacToeCtn}>
          <FlatList numColumns={3} keyExtractor={(item, index)=> index.toString()} data={array} renderItem={({item, index}) => {
            return(
              <TouchableOpacity style={styles.BoxCtn} onPress={() => handlePress(index)}>
                  <Text style={[
                    styles.selection,{
                      color:item==='X' ? 'red' : 'blue'
                    }
                  ]}>{item}</Text>
              </TouchableOpacity>
            );
          }}/>
        </View>

        {/* Winner Text Container  */}
        <View style={styles.WinnerTxtCtn}>
            <Text style={[
                    styles.selection,{
                      color:message==='Player X Wins!' ? 'red' : 'blue'
                    }
                  ]}>{message}</Text>
          </View>

        {/* Reset Button  */}
        <View style={styles.resetBtnCtn}>
          <TouchableOpacity style={styles.resetBtn} onPress={ResetGame}>
            <Text style={styles.resetBtnText}>Reset Game</Text>
          </TouchableOpacity>
        </View>
        {/* Navigation Buttons  */}
        <View>
          <TouchableOpacity onPress={() =>navigation.navigate("User")}>
            <Text>Users Page</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>navigation.navigate("Settings")}>
            <Text>Settings Page</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles= StyleSheet.create({
  SafeAreaView: {
      flex:0,
      backgroundColor:'black',
      height: Dimensions.get('window').height*0.05
  },
  ScreenContainer:{
      flex:1,
  },
  BoxCtn:{
      borderWidth:5,
      borderColor:'white',
      backgroundColor: 'black',
      width: 100,
      height: 100,
      margin: 15,
      alignItems:'center',
      justifyContent: 'center',
      borderRadius:20,
  },
  TicTacToeCtn:{
      paddingTop:5,
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center',
      borderBottomColor:'black',
      borderBottomWidth:5,
  },
  selection:{
      fontSize:50,
  },
  resetBtnCtn:{
      borderTopWidth:5,
      borderTopColor:'black',
      backgroundColor:'white',
      position:'absolute',
      bottom:0,
      width:"100%",
      padding:15,

  },
  resetBtn: {
      backgroundColor:'black',
      alignItems:'center',
      justifyContent:'center',
      padding:15,
      borderRadius:20,

  },
  resetBtnText:{
      color:'white',
      fontSize:30,
      fontWeight:'bold',
  },

  topTextCtn:{
    flex:0,
    
    padding: 25,
    backgroundColor:'black',
  },
  topText:{
      paddingTop:50,
      paddingBottom:0,
      paddingLeft:100,
      color:'white',
      fontSize:30,
      fontWeight:'bold',
  },
  WinnerTxtCtn:{
      padding:15,
      paddingBottom:70,
      backgroundColor:'black',
      alignItems:'center',
      justifyContent:'center',
  },

  WinnerTxt:{
    fontSize:50,
    color:'white',
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
  }
}
)

