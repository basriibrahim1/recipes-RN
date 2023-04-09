import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableHighlight, View } from 'react-native'
import Like from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import RecipesAction from '../../storage/action/recipes/recipesAction'
import IdRecipesAction from '../../storage/action/recipes/idRecipesAction'
import { useNavigation } from '@react-navigation/native'

const PopularRecipes = () => {
    const [isTrue, setIsTrue] = useState(true)
    const [isFalse, setIsFalse] = useState(true)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const recipes = useSelector(state => state.recipes)


    useEffect(() => {
        dispatch(RecipesAction())
    },[])


    const handleBookmark = () => {
        setIsTrue(false)
        if(isTrue === false){
            setIsTrue(true)
        }
    }

    const handleLike = () => {
        setIsFalse(false)
        if(isFalse === false){
            setIsFalse(true)
        }
    }

    const handlePress = (id) => {
        dispatch(IdRecipesAction(id))
        navigation.navigate('Detail', {id: id})
    }
  return (
    <View>
       <ScrollView style={{ paddingLeft:30, marginTop:15}}>
            {recipes.isLoading ? <Text>Loading...</Text> :
                <ScrollView style={{display:'flex',}}>
                {recipes.data.map(item => {
                    return (
                        <TouchableWithoutFeedback onPress={() => handlePress(item.id)} key={item.id}>
                        <View style={{marginHorizontal:5, display:'flex', flexDirection:'row'}}>
                            <Image style={{width:150, height:100, borderRadius:10, marginTop:20}} source={{uri: `${item.photo}`}}/>
                            <View style={{justifyContent:'center', marginLeft:20, width:'25%'}}>
                                <Text numberOfLines={1} style={{color:'black', fontSize:15, fontWeight:'800'}}>{item.title}</Text>
                                <Text numberOfLines={1} style={{color:'black', overflow:'hidden', marginBottom:10, marginTop:10, height:20}}>{item.creator}</Text>
                                <Text numberOfLines={1} style={{color:'black', overflow:'hidden', marginBottom:10, marginTop:10, height:20}}>{item.category}</Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end', width:'25%'}}>
                                <View>
                                    <TouchableHighlight onPress={handleBookmark} useForeground={false}>
                                        <Icon name={isTrue ? 'bookmark-outline' : 'bookmark'}  size={30} color='#EEC302' />
                                    </TouchableHighlight>
                                </View>
                                <View>
                                    <TouchableWithoutFeedback onPress={handleLike} useForeground={false}>
                                        <Like name={isFalse ? 'heart-outlined' : 'heart'}  size={33} color='#EEC302' />
                                    </TouchableWithoutFeedback>
                                </View>
                            </View> 
                        </View>
                        
                    </TouchableWithoutFeedback>
                    
                    )
                })}
                </ScrollView>
            }
            
        </ScrollView>
    </View>
  )
}




export default PopularRecipes