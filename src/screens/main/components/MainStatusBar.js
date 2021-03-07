import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ProgressBar from '../../shared/ProgressBar';

const MainStatusBar = ({ hp, atk, def, satk, sdef, speed, max }) => {
  return (
    <View style={styles.container}>
      <ProgressBar name="HP" stat={hp} color="#006251" max={max} />
      <ProgressBar name="ATK" stat={atk} color="#006251" max={max} />
      <ProgressBar name="DEF" stat={def} color="#006251" max={max} />
      <ProgressBar name="S-ATK" stat={satk} color="#006251" max={max} />
      <ProgressBar name="S-DEF" stat={sdef} color="#006251" max={max} />
      <ProgressBar name="Speed" stat={speed} color="#006251" max={max} />
    </View>
  )
}

/**
 * Main status bar stylesheet
 */
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5
  }
})

export default MainStatusBar;