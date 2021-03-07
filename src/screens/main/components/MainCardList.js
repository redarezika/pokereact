import * as React from 'react';
import { StyleSheet, VirtualizedList } from 'react-native';
import MainCardBody from './MainCardBody';

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index+1}`
});

const getItemCount = (data) => 20;

const Item = () => (
  <MainCardBody 
    name="hahahaha ha ha"
  />
);

const MainCardList = () => {

  return (
    <VirtualizedList
      data={DATA}
      initialNumToRender={4}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 130
  }
})

export default MainCardList;