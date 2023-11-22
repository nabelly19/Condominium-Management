import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import AdmPage from  './src/views/admPage';
import UserPage from './src/views/userPage';
import HomePage from './src/views/home';
import Welcome from './src/views/welcome';
import loginUser from './src/views/Login/loginuser';

import Financeiro from './src/views/AdmAssets/Financeiro';
import CadNovo from './src/views/AdmAssets/NovoAp';
import Painel from './src/views/AdmAssets/Painel';
import Blocos from './src/views/AdmAssets/Blocos';
import Vagas from './src/views/AdmAssets/Vagas';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen name = "HomePage" component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name = "LoginUser" component={loginUser} options={{headerShown: false}}/>
        <Stack.Screen name = "AdmPage" component={AdmPage} options={{headerShown: false}}/>
        <Stack.Screen name = "UserPage" component={UserPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
