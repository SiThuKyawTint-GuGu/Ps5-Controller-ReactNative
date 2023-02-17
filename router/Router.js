import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from '../pages/Home';
import About from '../pages/About'
import {
  createStackNavigator
} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
  return (
        <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default Router