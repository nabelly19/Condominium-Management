import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useContext} from 'react';
import { UtilsContext } from './context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import AdmPage from  './views/adm';
import UserPage from './views/user';
import HomePage from './views/home';

export default function App() {

  // const [utils, setUtils] = useState({users:[]})
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "HomePage" component={AdmPage}/>
        <Stack.Screen name = "AdmPage" component={AdmPage}/>
        <Stack.Screen name = "UserPage" component={UserPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
