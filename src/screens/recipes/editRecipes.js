import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ImageGalleryComponent from '../../components/gallery/gallery'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import IdRecipesAction from '../../storage/action/recipes/idRecipesAction'
import EditRecipesAction from '../../storage/action/recipes/editRecipesAction'


const EditRecipes = () => {
  const dispatch = useDispatch()
  const route = useRoute()
  const navigation = useNavigation()
  const data = route.params.id




  const [select, setSelect] = useState()
  const [imageGallery, setImageGallery] = useState(null)
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const token = useSelector(state => state.login.data.token)
  const idRecipe = useSelector(state => state.idRecipes.data)


  useEffect(() => {
    dispatch(IdRecipesAction(data))
  },[])
  
  
  const handleSubmit = () => {
    const inputForm = new FormData()
    inputForm.append('title', title)
    inputForm.append('ingredients', ingredients)
    inputForm.append('category_id', select)
    inputForm.append('photo', !imageGallery ? idRecipe.photo :
    {
        uri: imageGallery.uri,
      type: imageGallery.type,
      name: imageGallery.fileName,
    })

    dispatch(EditRecipesAction(data, token, inputForm, navigation))
  }


  return (
    <ScrollView style={{marginTop:50}}>
        <Text style={{textAlign:'center', fontSize:25, fontWeight:'700'}}>Edit Recipe</Text>
        {idRecipe.map(item => (
            <View style={{paddingHorizontal:20, marginTop:30}} key={item.id}>
            {imageGallery === null ?
            <View style={{alignItems:'center', marginBottom:20}}>
                <Image style={{width:150, height:150}} source={{uri: item.photo}} />
            </View> : <View style={{alignItems:'center', marginBottom:20}}>
                <Image style={{width:150, height:150}} source={{uri: imageGallery.uri}} />
            </View> }
            <ImageGalleryComponent setImageGallery={setImageGallery}/>
            <TextInput style={{borderRadius:10, paddingLeft:20, backgroundColor:'white', elevation:5, marginTop:20}} placeholder={item.title} placeholderTextColor='black' autoComplete='off' value={title} onChangeText={(value) => setTitle(value)}/>
            <TextInput style={{borderRadius:10, marginTop:20, textAlignVertical:'top', paddingLeft:20, paddingTop:20, backgroundColor:'white', elevation:5}} multiline={true} numberOfLines={10} placeholder={item.ingredients} autoComplete='off' value={ingredients} onChangeText={(value) => setIngredients(value)}/>
            <Picker style={{borderRadius:20, marginTop:20, textAlignVertical:'top', paddingLeft:20, paddingTop:20, backgroundColor:'white', elevation:5}} selectedValue={select} onValueChange={(pick) => setSelect(pick)}>
              <Picker.Item label="Main Course" value={1}/>
              <Picker.Item label="Dessert" value={2}/>
              <Picker.Item label="Minuman" value={3}/>
            </Picker>
            <View style={{alignItems:'center', marginTop:20}}>
                <TouchableHighlight style={{backgroundColor:'#EEC302', paddingHorizontal:24, paddingVertical:5, borderRadius:7, marginVertical:3, width:'50%', alignItems:'center'}} underlayColor="green" onPress={handleSubmit}>
                    <Text style={{color:'white', fontSize:16}}>EDIT</Text>
                </TouchableHighlight>
            </View>
        </View>
        ))}
        
    </ScrollView>
  )
}

export default EditRecipes