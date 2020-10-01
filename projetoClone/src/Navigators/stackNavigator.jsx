import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/login'
import DrawerNavigator from '../Navigators/drawerNavigator';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
  
      <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Root" component={DrawerNavigator} options={{headerShown:false}} />
      </Stack.Navigator>
  
  );
}

export default Navigator;