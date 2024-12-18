import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, FlatList, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "./UserScreen";
import SettingsScreen from "./SettingsScreen";

const {height} = Dimensions.get('window');

export default function HomeScreen({ navigation }: { navigation: any }): React.JSX.Element {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const boxes = ['', '', '', '', '', '', '', '', ''];
  const [array, setArray] = useState(boxes);
  const [message, setMessage] = useState('');

  //Function to Check Horizontal Matches
  const HorizontalMatches = (tempArray: string[], value: string) => {
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

  //Function to Check Vertical Matches
  const VerticalMatches = (tempArray: string[], value: string) => {
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

  //Function to Check Diagonal Matches
  const DiagonalMatches = (tempArray: string[], value: string) => {
    if (tempArray[0] === value && tempArray[4] === value && tempArray[8] === value) {
      setMessage(`Player ${value} Wins!`);
    }
    if (tempArray[2] === value && tempArray[4] === value && tempArray[6] === value) {
      setMessage(`Player ${value} Wins!`);
    }
  }

  //Function to Display the winner
  const getWinner = (tempArray: string[], value: string) => {
    if (tempArray.length <= 0) { return false; }

    HorizontalMatches(tempArray, value);
    VerticalMatches(tempArray, value);
    DiagonalMatches(tempArray, value);

    if (!tempArray.includes("") && message === "") {
      setMessage("It's a Draw!");
    }
  };

  //HandlePress function for Board
  const handlePress = (index: number) => {
    if (array[index] !== "" || message !== "") return;
    const value = array.filter((x) => x !== "").length % 2 === 0 ? "X" : "O";
    const newArray = [...array];
    newArray[index] = value;
    setArray(newArray);
    getWinner(newArray, value);

    if (message === '') {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  //Function To Reset Gamme
  const ResetGame = () => {
    setArray(boxes);
    setMessage('');
    setCurrentPlayer('X');
  }

  return (
    <>
      <View style={styles.SafeAreaView} />
      <StatusBar />
      {/* Game Board  */}
      <SafeAreaView style={styles.ScreenContainer}>
        <View style={styles.TicTacToeCtn}>
          <FlatList
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            data={array}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={styles.BoxCtn} onPress={() => handlePress(index)}>
                  <Text style={[styles.selection, { color: item === 'X' ? 'red' : 'blue' }]}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* Winner Text Container */}
        <View style={styles.WinnerTxtCtn}>
          <Text style={[
            styles.selection, {
              color: message === 'Player X Wins!' ? 'red' : message === "Player O Wins!" ? 'blue' : 'white'
            }
          ]}>{message || `Player ${currentPlayer}'s Turn`}</Text>
        </View>

        {/* Reset Button */}
        <View style={styles.resetBtnCtn}>
          <TouchableOpacity style={styles.resetBtn} onPress={ResetGame}>
            <Text style={styles.resetBtnText}>Reset Game</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Buttons */}
        <View style={styles.NavBtnCtn}>
          <TouchableOpacity onPress={() => navigation.navigate("User")} style={styles.NavBtn}>
            <Text style={styles.NavBtnText}>Users Page</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.NavBtn}>
            <Text style={styles.NavBtnText}>Settings Page</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

//Styles
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 0,
    backgroundColor: 'black',
    height: Dimensions.get('window').height * 0.05,
  },
  ScreenContainer: {
    flex: 1,
  },
  BoxCtn: {
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'black',
    width: 100,
    height: 100,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  TicTacToeCtn: {
    paddingTop: 5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  },
  selection: {
    fontSize: 30,
    color:'gray',
  },
  resetBtnCtn: {
    borderTopWidth: 5,
    borderTopColor: 'black',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 15,
  },
  resetBtn: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 20,
  },
  resetBtnText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  WinnerTxtCtn: {
    padding: 15,
    paddingBottom: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  WinnerTxt: {
    fontSize: 30,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  NavBtnCtn: {
    backgroundColor:'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom:15,
  },
  NavBtn: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
  },
  NavBtnText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
