import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';


export default function Index(props) {
  return (
    
      <View>
        <Box
          bgColor={'black'}
          h="98%"
          w='100%'
          p={2}
          borderRadius={10}
          alignContent="center"
          justifyContent='center'
          >
          <Text style={styles.text}>1</Text>
        </Box>
      </View>
    
  );
}


const styles = StyleSheet.create({
    text:{
        display:'flex',
        color:'white',
        alignSelf:'center',
        justifyContent:'center',
        zIndex:1,
        fontWeight:'bold'
    }
})
