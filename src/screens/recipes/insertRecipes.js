import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import InsertRecipesAction from '../../storage/action/recipes/insertRecipesAction'
import ImageGalleryComponent from '../../components/gallery/gallery'
import { useNavigation } from '@react-navigation/native'

const InsertRecipes = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [select, setSelect] = useState(1)
  const [imageGallery, setImageGallery] = useState(null)
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const token = useSelector(state => state.login?.data?.token)


  const handleSubmit = () => {
    const inputForm = new FormData()
    inputForm.append('title', title)
    inputForm.append('ingredients', ingredients)
    inputForm.append('category_id', select)
    inputForm.append('photo', {
      uri: imageGallery.uri,
      type: imageGallery.type,
      name: imageGallery.fileName,
    })

    dispatch(InsertRecipesAction(inputForm, token, navigation))
    setTitle('')
    setIngredients('')
  }


  return (
    <ScrollView style={{marginTop:50}}>
        <Text style={{textAlign:'center', fontSize:25, fontWeight:'700'}}>Add Your Recipe</Text>
        <View style={{paddingHorizontal:20, marginTop:30}}>

            {imageGallery  &&
            <View style={{alignItems:'center', marginBottom:20}}>
                <Image style={{width:150, height:150}} source={{uri: imageGallery.uri}} />
            </View> }

            <TextInput style={{borderRadius:10, paddingLeft:20, backgroundColor:'white', elevation:5, marginTop:20}} placeholder='Title' placeholderTextColor='black' autoComplete='off' value={title} onChangeText={(value) => setTitle(value)}/>
            <TextInput style={{borderRadius:10, marginTop:20, textAlignVertical:'top', paddingLeft:20, paddingTop:20, backgroundColor:'white', elevation:5}} multiline={true} numberOfLines={10} placeholder='Description' autoComplete='off' value={ingredients} onChangeText={(value) => setIngredients(value)}/>
            <Picker style={{borderRadius:20, marginTop:20, textAlignVertical:'top', paddingLeft:20, paddingTop:20, backgroundColor:'white', elevation:5}} selectedValue={select} onValueChange={(item) => setSelect(item)}>
              <Picker.Item label="Main Course" value={1}/>
              <Picker.Item label="Dessert" value={2}/>
              <Picker.Item label="Minuman" value={3}/>
            </Picker>
            {imageGallery === null &&
            <View style={{marginTop:20}}>
              <ImageGalleryComponent setImageGallery={setImageGallery}/>
            </View>}
            <View style={{alignItems:'center', marginTop:20}}>
                <TouchableHighlight style={{backgroundColor:'#EEC302', paddingHorizontal:24, paddingVertical:5, borderRadius:7, marginVertical:3, width:'50%', alignItems:'center'}} underlayColor="green" onPress={handleSubmit}>
                    <Text style={{color:'white', fontSize:16}}>POST</Text>
                </TouchableHighlight>
            </View>
        </View>
    </ScrollView>
  )
}

export default InsertRecipes