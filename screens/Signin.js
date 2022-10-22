import React, { useEffect, useState } from 'react'
import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, NativeBaseProvider, Text, VStack } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native';


export default function Signin({navigation}) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const [first, setfirst] = useState()
  const [second, setsecond] = useState()

  const signin = () => {
    if (user == first && password == second) {
      navigation.navigate('Post')
    }else{
      alert('User Name PW')
    }
  }


  const response = async () => {
    try {
     const response = await fetch('https://mocki.io/v1/b476f90e-5e17-4e80-81f9-3834e94ecb85');
     const json = await response.json();
     console.log(json.user)
      setfirst(json.user)
      setsecond(json.password)
     return json
   } catch (error) {
     console.error('Eroor :',error);
   } finally {
     
   }
 }

 useEffect(() => {
   response();

 }, []);


  return (
    <NativeBaseProvider>
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input type='text' onChangeText={setUser}
          />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={setPassword}
            />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo"
          onPress={signin}
          >
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }}  onPress={()=>{navigation.navigate('Sign up')}}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    </NativeBaseProvider>
  );
}