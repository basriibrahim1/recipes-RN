import ImagePicker from 'react-native-image-picker';

const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
  
    ImagePicker.launchCamera(options, (response) => {

      response.didCancel && console.log('User cancelled')
      response.error && console.log('ImagePicker Error: ', response.error);
    });
  }

export default openCamera