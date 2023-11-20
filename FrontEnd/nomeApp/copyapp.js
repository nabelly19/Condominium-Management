import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import AdmPage from  './src/views/adm';
import UserPage from './src/views/user';
import HomePage from './src/views/home';
import Welcome from './src/views/welcome';

export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen name = "HomePage" component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name = "AdmPage" component={AdmPage} options={{headerShown: false}}/>
        <Stack.Screen name = "UserPage" component={UserPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
