import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Input, NativeBaseProvider} from 'native-base';
import {VStack} from 'native-base';


export default function VehicleInput() {
  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
        <Input mx="3" variant="underlined" placeholder="Register Number" />
        <Input mx="3" variant="underlined" placeholder="Model" />
        <Input mx="3" variant="underlined" placeholder="Contact" />
        <Input mx="3" variant="underlined" placeholder="Price" />
        <TouchableOpacity
        style={styles.button}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
      </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width:'90%',
  },
});
