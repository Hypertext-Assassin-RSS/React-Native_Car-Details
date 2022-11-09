import React, {useEffect, useState} from 'react';
import {
  Alert,
  Box,
  Button,
  Center,
  CloseIcon,
  Collapse,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Input,
  Link,
  NativeBaseProvider,
  Text,
  VStack,
  Avatar,
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function Signin({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [first, setfirst] = useState();
  const [second, setsecond] = useState();

  const [show, setShow] = useState(false);
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const signin = () => {
    if (user == first && password == second) {
      setStatus('success');
      setMessage('Login successfull');
      setShow(true);
      setTimeout(() =>{
        navigation.navigate('Home')
      },1000);
    } else {
      setStatus('error');
      setMessage('User name or Password is Wrong');
      setShow(true);
    }
  };

  const response = async () => {
    try {
      const response = await fetch('http://localhost:4000/user');
      const json = await response.json();
      console.log(json.user);
      setfirst(json.user);
      setsecond(json.password);
      
      return json;
    } catch (error) {
      console.error('Error :', error);
    } finally {
    }
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            Sign in to continue!
          </Heading>
          <HStack mt="6" justifyContent="center">
            <Avatar
            bg="blue.600"
            mr="1"
            size="xl"
            source={{
              uri: '#',
            }}>
            RS
          </Avatar>
          </HStack>
          
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input type="text" onChangeText={setUser} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" onChangeText={setPassword} />
              <Link
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'indigo.500',
                }}
                alignSelf="flex-end"
                mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={signin}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                I'm a new user.{' '}
              </Text>
              <Link
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                onPress={() => {
                  navigation.navigate('Sign up');
                }}>
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
        <Collapse isOpen={show} >
          <Alert w="100%" marginTop={1} status={status} colorScheme={status}>
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={0} justifyContent="space-between">
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="coolGray.800">
                    {message}
                  </Text>
                </HStack>
                <IconButton
                  variant="unstyled"
                  _focus={{
                    borderWidth: 0,
                  }}
                  icon={<CloseIcon size="3" />}
                  _icon={{
                    color: 'coolGray.600',
                  }}
                  onPress={() => setShow(false)}
                />
              </HStack>
            </VStack>
          </Alert>
        </Collapse>
      </Center>
    </NativeBaseProvider>
  );
}
