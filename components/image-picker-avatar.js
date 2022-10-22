import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';

import { images } from '../assets';

export function ImagePickerAvatar({ uri, onPress }) {
  return (
    <ImageBackground
      style={styles.imageBackground}>
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          source={uri ? { uri } : images.imageIco}
        />
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <Image style={styles.addButtonIcon} source={images.addButton} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  avatar: {
    alignItems: 'center',
    marginTop: '17%',
  },
  avatarImage: {
    height: 200,
    width: 200,
    overflow: 'hidden',
    //borderColor: '#ffffff',
    //borderWidth: 4,
    //borderRadius: 260 / 2,
  },
  addButton: {
    height: 50,
    width: 50,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 80,
    bottom: 30,
  },
  addButtonIcon: {
    height: 50,
    width: 50,
  },
});
