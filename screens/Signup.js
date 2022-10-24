import {View} from 'react-native';
import React, {useState} from 'react';
import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';

export default function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Temp, setTemp] = useState('');

  const Signup = () => {
    const data = {email: 'example', password: 'example'};
    fetch('http://localhost:3001/signup', {
      method: 'POST', // or 'PUT'
      body: {data},
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    //navigation.navigate('Home');

    // if (password == Temp) {

    // } else {
    // }
  };

  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
            fontWeight="semibold">
            Welcome
          </Heading>
          <Heading
            mt="1"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
            fontWeight="medium"
            size="xs">
            Sign up to continue!
          </Heading>
          <HStack mt="6" justifyContent="center">
            <Avatar
              bg="blue.600"
              mr="1"
              size="xl"
              source={{
                uri: '#',
              }}>
              --
            </Avatar>
          </HStack>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                onChangeText={value => {
                  setEmail(value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                onChangeText={value => {
                  setPassword(value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                type="password"
                onChangeText={value => {
                  setTemp(value);
                }}
              />
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={() => {
                Signup();
              }}>
              Sign up
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                I'm a user.{' '}
              </Text>
              <Link
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                onPress={() => {
                  navigation.navigate('Sign in');
                }}>
                Sign In
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
