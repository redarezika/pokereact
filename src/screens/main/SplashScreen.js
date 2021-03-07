import * as React from 'react';
import { Image, View } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{justifyContent: "center", position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}>
      <Image 
        source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"}}
        style={{width: 400, height: 400, alignSelf: "center"}}
      />
    </View>
  )
}

export default SplashScreen;