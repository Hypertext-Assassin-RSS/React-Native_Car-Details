import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {NativeBaseProvider, VStack} from 'native-base';
import Backgroud from '../components/vehicle/Backgroud';

export default function Home({navigation}) {
  const response = async () => {
    try {
      const response = await fetch(
        'https://mocki.io/v1/482889f4-2c42-49da-a29c-77f24ad5a647',
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Eroor :', error);
    } finally {
    }
  };


  useEffect(() => {
    response();
  }, []);

  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
        <Backgroud reg="BCW-8035" />
        <TouchableOpacity style={styles.button} 
        onPress={() => {
          navigation.navigate('Post');
        }}
        >
          <Text>New Vehicle</Text>
        </TouchableOpacity>
      </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#4F46E5',
    padding: 10,
    width: '90%',
  },
});
