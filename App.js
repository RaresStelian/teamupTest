import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StyleSheet} from 'react-native';
import {MainStackNavigator} from './app/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
