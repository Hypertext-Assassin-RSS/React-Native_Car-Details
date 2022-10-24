import {View, Text} from 'react-native';
import React from 'react';
import {Box, HStack, NativeBaseProvider} from 'native-base';
import Index from './Index';
import Model from './Model';
import Contact from './Contact';
import Register from './Register';


export default function Backgroud(props) {
    

  return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Box borderRadius={10} w="90%" h="40%" bg="blue.600" shadow={5} padding={1.5}>
        <HStack space={3} display='flex' alignItems='center'>
            <Index />
            <Register reg='BVW-8035'/>
            <Model />
            <Contact />
        </HStack>
        </Box>
      </View>
    
  );
}
