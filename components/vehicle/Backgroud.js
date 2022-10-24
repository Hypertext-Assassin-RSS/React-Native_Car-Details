import {View, Text} from 'react-native';
import React from 'react';
import {Box, HStack, NativeBaseProvider} from 'native-base';
import Index from './Index';
import Model from './Model';
import Contact from './Contact';
import Register from './Register';


export default function Backgroud(props) {
    

  return (
    <NativeBaseProvider>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Box borderRadius={10} w="90%" h="30%" bg="primary.500" shadow={5} padding={1.5}>
        <HStack space={3} display='flex' alignItems='center'>
            <Index />
            <Register props/>
            <Model />
            <Contact />
        </HStack>
        </Box>
      </View>
    </NativeBaseProvider>
  );
}
