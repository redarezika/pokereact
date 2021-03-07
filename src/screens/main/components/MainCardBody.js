import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import MainStatusBar from './MainStatusBar';

class MainCardBody extends React.Component {

  constructor(props) {
    super(props);
    this.name     = props.name;
    this.number   = props.number;
    this.nav      = props.nav;
    this.stats    = props.stats;
    this.isDone   = props.isDone;
  }

  /**
   * Render screen
   * @returns {View}
   */
  render() {
    const data    = this.props.limitedPokemon.find(item => item.name == this.name);
    const details = data.details || {}
    const stats   = details.stats || [];
    const hp      = stats[0] || {};
    const atk     = stats[1] || {};
    const def     = stats[2] || {};
    const satk    = stats[3] || {};
    const sdef    = stats[4] || {};
    const speed   = stats[5] || {};
    const stat    = stats.map(item => item.base_stat);
    const max     = Math.max(...stat)
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.number}.png`}} style={{width: 100, height: 100}} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoName}>{this.name}</Text>
          <MainStatusBar 
            hp={hp.base_stat || 0} 
            atk={atk.base_stat || 0}
            def={def.base_stat || 0}
            satk={satk.base_stat || 0}
            sdef={sdef.base_stat || 0}
            speed={speed.base_stat || 0}
            max={max || 100}
          />
        </View>
      </View>
    )
  }
}

/**
 * Main card body stylesheet
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CBEB3",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5,
    height: 180,
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
    elevation: 5,
    justifyContent: "center",
    paddingLeft: 20
  },
  infoContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    right: 0,
    padding: 10,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15
  },
  infoName: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  buttonShowDetail: {
    position: "absolute",
    bottom: 15,
    right: 30,
    left: 30
  }
})

/**
 * Create connection to global state
 * @param {any} state
 */
const mapStateToProps = (state) => ({
  limitedPokemon: state.limitedPokemon
})

export default connect(mapStateToProps)(MainCardBody);