import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Login({navigation}) {
  return (
    <View>
      <Text>Login</Text>
      <Button title='Register' onPress={() => {navigation.navigate('Register')}}></Button>
    </View>
  )
}