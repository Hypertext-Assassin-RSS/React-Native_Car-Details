import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';


export default function Index(props) {
  return (
    <NativeBaseProvider>
      <View>
        <Box
          bgColor={'black'}
          h="98%"
          borderRadius={10}
          alignContent="center"
          justifyContent='center'
          >
          <Text style={styles.text}>1</Text>
        </Box>
      </View>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
    text:{
        display:'flex',
        color:'white',
        alignSelf:'center',
        justifyContent:'center',
    }
})
