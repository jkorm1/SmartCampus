import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import 'firebase/auth'

import HomeScreen from './Screens/Home';
import LoginScreen from './Screens/Login';
import SignupScreen from './Screens/Signup';
import HostelScreen from './Screens/Hostel';
import HomstelScreen from './Screens/Homstel';
import TheresaScreen from './Screens/Theresa';
import PicturesScreen from './Screens/Pictures';



const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Hostel" component={HostelScreen} />
        <Stack.Screen name="Homstel" component={HomstelScreen} />
        <Stack.Screen name="Theresa" component={TheresaScreen} />
        <Stack.Screen name="Pictures" component={PicturesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;  