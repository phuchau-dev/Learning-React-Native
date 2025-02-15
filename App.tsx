import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        animated={true}
        backgroundColor="#61dafb"
      />
      <AppNavigator />
    </>
  );
};

export default App;
