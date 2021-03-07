import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProgressBar = ({ name, stat, color, max }) => {
  const width = (100 - ((stat / (max + 20)) * 100)) + "%";
  return (
    <View style={styles.container}>
      <View style={styles.barNameContainer}>
        <Text style={styles.barName}>{name}</Text>
      </View>
      <View style={styles.progressContainer}>
        <View 
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: width,
            backgroundColor: color,
            borderRadius: 15
          }} 
        />
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.statValue}>{stat}</Text>
      </View>
    </View>
  )
}

/**
 * Main progress bar stylesheet
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 2
  },
  progressContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 15
  },
  barNameContainer: {
    width: 30
  },
  barName: {
    elevation: 0,
    color: "white",
    fontSize: 10
  },
  statContainer: {
    width: 25
  },
  statValue: {
    color: "white",
    alignSelf: "flex-end",
    fontSize: 10
  }
})

export default ProgressBar;