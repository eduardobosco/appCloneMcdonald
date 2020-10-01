import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigators/stackNavigator'
import DrawerNavigator from './src/Navigators/drawerNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
      <DrawerNavigator />
      </StackNavigator>
      
    </NavigationContainer>
  );
}

export default App;