import * as React from 'react';
import { StyleSheet, VirtualizedList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainCardBody from './MainCardBody';
import { loadLimitData } from '../../../redux/Actions';

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  name: data[index].name,
  number: index + 1,
  stats: data[index].details.stats
});

class MainCardList extends React.Component {

  constructor(props) {
    super(props)
    this.nav = this.props.nav;
  }

  /**
   * Render screen
   * @returns {VirtualizedList}
   */
  render() {
    return (
      <VirtualizedList
        data={this.props.limitedPokemon}
        initialNumToRender={1}
        renderItem={({ item }) => <MainCardBody name={item.name} number={item.number} nav={this.nav} />}
        keyExtractor={item => item.id}
        getItemCount={() => ( this.props.limitedPokemon.length) }
        getItem={getItem}
        style={styles.container}
      />
    )
  }
}

/**
 * Main card list stylesheet
 */
const styles = StyleSheet.create({
  container: {
    marginTop: 100
  }
})

/**
 * Create connection to global state
 * @param {any} state 
 */
const mapStateToProps = (state) => ({
  limitedPokemon: state.limitedPokemon
})

/**
 * Create connection to global action
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadLimitData
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MainCardList);