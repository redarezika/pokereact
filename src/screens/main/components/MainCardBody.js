import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from "expo-svg-uri";

const MainCardBody = ({ name, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <SvgUri
          width="60%"
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoName}>{name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CBEB3",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 15,
    height: 170,
    marginHorizontal: 20,
    marginVertical: 10
  },
  imageContainer: {
    position: "absolute",
    backgroundColor: "#ffffff",
    top: 0,
    bottom: 0,
    right: "60%",
    left: 0,
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
    borderTopEndRadius: 50,
    borderBottomEndRadius: 50,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 15,
    justifyContent: "center",
    paddingLeft: 20
  },
  infoContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    right: 0,
    justifyContent: "center",
    padding: 10,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15
  },
  infoName: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center"
  }
})

export default MainCardBody;