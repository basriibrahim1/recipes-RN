import { Text, TouchableHighlight, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';


const ImageGalleryComponent = (props) => {
  
  const {setImageGallery} = props
  
  const openGallery = () => {

    const options = {
      mediaType: 'photo',
      quality: 1,
    };
  
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if(response.didCancel){
        console.log('User cancelled')
      } else if(response.error){
        console.log('ImagePicker Error: ', response.error);
      } else {
        const data = response.assets[0]
        setImageGallery(data)
        console.log(data)
      }
   
    });
  }

    return (
      <View style={{alignItems:'center'}}>
       <TouchableHighlight style={{borderRadius:5, paddingLeft:20, backgroundColor:'white', elevation:5, width:'100%'}} onPress={openGallery}>
        <Text style={{fontSize:15, paddingVertical:15}}>Select Image From Gallery</Text>
    </TouchableHighlight>
       
      </View>
    )
  


}



export default ImageGalleryComponent