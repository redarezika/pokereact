import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AppButton = ({ onPress, title, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, style]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 5,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 18,
    shadowColor: "black",
    shadowOpacity: 0.2
  },
  appButtonText: {
    color: "#333333",
    alignSelf: "center",
    fontSize: 12
  }
})

export default AppButton;