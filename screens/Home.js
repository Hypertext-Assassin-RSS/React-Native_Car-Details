import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NativeBaseProvider } from 'native-base'
import Backgroud from '../components/vehicle/Backgroud'

export default function Home() {

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
      <Backgroud reg='BCW-8035'/>
    </NativeBaseProvider>
  )
}