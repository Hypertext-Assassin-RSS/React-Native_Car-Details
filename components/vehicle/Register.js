import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'native-base';


export default function Register(props) {
  return (
    <View>
      <Text
      style={styles.text}
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

const styles = StyleSheet.create({
  text :{
    padding:4,
    borderRadius:10,
  }
})
