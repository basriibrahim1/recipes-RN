import { View, Text, StyleSheet, TextInput, Image, TouchableWithoutFeedback} from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Search from 'react-native-vector-icons/Ionicons'
import DrinkName from 'react-native-vector-icons/Entypo'
import Soup from '../../assets/Image/soup.png'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import RecipesAction from '../../storage/action/recipes/recipesAction'
import IdRecipesAction from '../../storage/action/recipes/idRecipesAction'


const SearchScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)

    const [text, setText] = useState()
    console.log(text)


    useEffect(() => {
        dispatch(RecipesAction(text))
    },[text])
    

    const handlePress = (id) => {
        dispatch(IdRecipesAction(id))
        navigation.navigate('Detail', {id: id})
    }

   
  return (
    <ScrollView style={styles.container}>
        <View style={styles.search}>
           <Search style={{marginTop:13}} name="search-outline" size={20} color="black"/>
            <TextInput onChangeText={(value) => setText(value)} placeholder={` Search Pasta Bread or etc`} placeholderTextColor='black' autoComplete='off'/>
        </View>

        <ScrollView style={{ paddingLeft:30, marginTop:15}}>
            {recipes.isLoading ? <Text>Loading...</Text> :
                <ScrollView style={{display:'flex',}}>
                {recipes.data.map(item => {
                    return (
                        <TouchableWithoutFeedback onPress={() => handlePress(item.id)} key={item.id}>
                        <View style={{marginHorizontal:5, display:'flex', flexDirection:'row'}}>
                            <Image style={{width:150, height:100, borderRadius:10, marginTop:20}} source={{uri: `${item.photo}`}}/>
                            <View style={styles.popular}>
                                <Text numberOfLines={1} style={{color:'black', fontSize:15, fontWeight:'800'}}>{item.title}</Text>
                                <Text numberOfLines={1} style={{color:'black', overflow:'hidden', marginBottom:10, marginTop:10, height:20, width:'100%'}}>{item.category}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    )
                })}
                </ScrollView>
            }
            
        </ScrollView>

    </ScrollView>
  )
}

export default SearchScreen



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    search: {
        display:'flex', 
        flexDirection:'row', 
        textAlign:'center', 
        alignContent:'center',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
        marginHorizontal: 30,
        paddingHorizontal: 20,
        marginVertical: 15,
        opacity: 0.6
    },
    popular: {
        justifyContent:'center',
        marginLeft:20
    },
})