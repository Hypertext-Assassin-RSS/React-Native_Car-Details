import React, {useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import {ImagePickerModal} from '../components/image-picker-modal';
import {ImagePickerAvatar} from '../components/image-picker-avatar';

export default function Post() {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <View style={styles.screen}>
      <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2fC',
  },
});
