import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import ListComponentDetail from '../components/ListComponentDetail';
import List from '../screens/List';
import Login from '../screens/Login';
import Register from '../screens/Register';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen
        name="ListComponentDetail"
        component={ListComponentDetail}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
