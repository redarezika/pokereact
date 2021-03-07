import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function MainSearchBar() {

  return(
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search your pokemon"></TextInput>
    </View>
  );
}

/**
 * Main search bar stylesheet
 */
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 110,
    left: 20,
    right: 20
  },
  searchBar: {
    backgroundColor: "#ffffff",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 15
  }
})