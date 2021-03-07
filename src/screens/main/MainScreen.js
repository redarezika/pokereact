import React from 'react';
import { View } from 'react-native';
import MainCardList from './components/MainCardList';
import MainHeader from './components/MainHeader';

class MainScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Render screen
   * @returns {View}
   */
  render() {
    return (
      <View>
        <MainCardList nav={this.props.navigation} />
        <MainHeader />
      </View>
    )
  }
}

export default MainScreen;