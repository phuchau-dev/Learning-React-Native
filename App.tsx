import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { fontFamilies } from './src/constants/fontFamilies';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  title: {
    fontFamily:fontFamilies.bold,
    fontSize: 32,
    color: 'white', 
  },
});
