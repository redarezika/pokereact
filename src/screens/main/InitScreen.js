import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Net from '../../util/Net';
import MainScreen from './MainScreen';
import SplashScreen from './SplashScreen';
import { loadLimitData } from '../../redux/Actions';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

class InitScreen extends React.Component {

  constructor(prop) {
    super(prop)
    this.state = { isDataLoaded: false }
  }

  /**
   * Render screen
   * @returns {NavigationContainer}
   */
  render() {
    if(this.state.isDataLoaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={MainScreen} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    } else {
      return <SplashScreen />
    }
  }

  /**
   * Triggered when component mounted
   */
  async componentDidMount() {
    try {
      var { results } = await Net.getPokemonList();
      for(let item of results) {
        var detailsData = await Net.getPokemonDetail(item.name);
        var { name, stats } = detailsData;
        console.log({ name, stats })
        item['details'] = { name, stats }
      }
      this.props.loadLimitData(results)
    } catch(err) {
      console.log(err);
    } finally {
      this.setState({ isDataLoaded: true })
    }
  }
}

/**
 * Create connection to global state
 * @param {any} state 
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadLimitData
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(InitScreen);