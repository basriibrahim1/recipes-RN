import React from 'react'
import {Alert, Image, ScrollView, Text, TouchableHighlight, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MyRecipesAction from '../../storage/action/recipes/myRecipesAction'
import { useEffect } from 'react'
import IdRecipesAction from '../../storage/action/recipes/idRecipesAction'
import { useNavigation } from '@react-navigation/native'
import DeleteRecipesAction from '../../storage/action/recipes/deleteRecipesAction'

const MyRecipe = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const data = useSelector(state => state.myRecipes.data)

    const token = useSelector(state => state.login.data.token)


    useEffect(() => {
      if (token) {
        dispatch(MyRecipesAction(token))
      }
    }, [dispatch, token])


   const handlePress = (id) => {
    dispatch(IdRecipesAction(id))
    navigation.navigate('EditRecipes', {id: id})
   }

   const showAlert = (id) => {
    Alert.alert(
      'Delete item',
      'Are you sure want to delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { 
          text: 'Delete',
          onPress: () => 
          dispatch(DeleteRecipesAction(id, token),
          dispatch(MyRecipesAction(token))
          ) 
        }
      ],
      { cancelable: true }
    );
  };
   

  return (
    <View>
        <ScrollView>
            <Text style={{textAlign:'center', marginTop:50 ,fontSize:25, fontWeight:'700'}}>My Recipes</Text>
            {!data ? navigation.navigate('Login')
            :
       
            <View style={{marginHorizontal:20, marginVertical:30}}>
                {data?.map ((item) => {
                    return (
                    <View style={{display:'flex', borderRadius:10, padding:10, flexDirection:'row', backgroundColor:'white', elevation:5, alignItems:'center', marginVertical:10}} key={item.id}>
                    <Image style={{height:70, width:70, resizeMode:'cover', borderRadius:50}} source={{uri: `${item.photo}`}} />
                    <View style={{marginLeft:15, width:'50%'}}>
                        <Text numberOfLines={1} style={{fontSize:20, color:'black', width:'100%', height:27, overflow:'hidden'}}>{item.title}</Text>
                        <Text numberOfLines={1} style={{width:'100%', height:20, overflow:'hidden'}}>{item.ingredients}</Text>
                    </View>
                    <View style={{alignItems:'flex-end', width:'25%', justifyContent:'flex-start'}}>
                        <View>
                            <TouchableHighlight style={{backgroundColor:'#30C0F3', paddingHorizontal:24, paddingVertical:5, borderRadius:7, marginVertical:3}} underlayColor="green" onPress={() => handlePress(item.id)}>
                                <Text style={{color:'white', fontSize:16}}>Edit</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight style={{backgroundColor:'#F57E71', paddingHorizontal:15, paddingVertical:5, borderRadius:7}} underlayColor="green" onPress={() => showAlert(item.id)}>
                                <Text style={{color:'white', fontSize:16}}>Delete</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    </View>
                    )
                })}
              
            </View>
              }
        </ScrollView> 
    </View>
  )
}

export default MyRecipe