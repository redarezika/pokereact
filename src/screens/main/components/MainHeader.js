import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function MainHeader() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>POKEDEX CARD</Text>
    </View>
  )
}

/**
 * Main header stylesheet
 */
const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#7CBEB3",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  title: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 30
  }
})