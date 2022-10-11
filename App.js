import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './screens/Signin';
import Signup from './screens/Signup';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Sign in" component={Signin} />
      <Stack.Screen name="Sign up" component={Signup} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}