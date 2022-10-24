import {View} from 'react-native';
import React from 'react';
import {Text} from 'native-base';

export default function Register(props) {
  return (
    <View>
      <Text
        highlight
        bold
        fontSize={'lg'}
        _dark={{
          color: 'coolgray.800',
        }}>
        {props.reg}
      </Text>
    </View>
  );
}
