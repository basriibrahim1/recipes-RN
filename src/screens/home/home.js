import { View, Text, StyleSheet, TextInput, Image, TouchableWithoutFeedback, TouchableHighlight} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Search from 'react-native-vector-icons/Ionicons'
import DrinkName from 'react-native-vector-icons/Entypo'
import Soup from '../../assets/Image/soup.png'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import RecipesAction from '../../storage/action/recipes/recipesAction'
import IdRecipesAction from '../../storage/action/recipes/idRecipesAction'


const Home = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)


    useEffect(() => {
        dispatch(RecipesAction())
    },[])
    

    const handlePress = (id) => {
        dispatch(IdRecipesAction(id))
        navigation.navigate('Detail', {id: id})
    }

   
  return (
    <ScrollView style={styles.container}>
        <View style={styles.search}>
            <Search style={{marginTop:5}} name="search-outline" size={20} color="black"/>
            <TouchableHighlight style={{justifyContent:'center', marginLeft:5}} onPress={() =>navigation.navigate('Search')}><Text>Search bread or pasta</Text></TouchableHighlight>
        </View>


        <View style={{marginLeft:20, marginTop:25, display:'flex'}}>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'500', color:'black'}}>Popular Recipes</Text>
                    <Text style={{fontSize:15, fontWeight:'400', color:'blue', textAlign:'right', width:'60%'}}>See more</Text>
        </View>
    {recipes.isLoading ? <Text>Loading...</Text> : 
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{overflow:'hidden'}}>
        {recipes.data.slice(0,3).map((item) => {
            return (  
                    <View style={{flexDirection:'row', marginHorizontal:5}} key={item.id}>
                        <Image style={{width:250, height:150, borderRadius:10, marginTop:20, position:'relative'}} source={{uri: `${item.photo}`}}/>
                        <Text style={{position:'absolute', top:120, color:'white', fontSize:15, fontWeight:'800', width:100, left:10, overflow:'hidden'}}>{item.title}</Text>
                    </View>
            )
        })}
        </ScrollView>}
       
        </View>
       

        <View style={{paddingHorizontal:30, marginTop:15}}>
            <Text style={{fontSize:20, fontWeight:'500', color:'black'}}>New Recipes</Text>
            <View style={{display:'flex', flexDirection:'row', textAlign:'center', alignItems:'center',}}>
                <View style={{alignItems:'center'}}>
                    <DrinkName name='drink' size={70} color='black'/>
                    <Text style={{color:'black', fontSize:15, fontWeight:'600', marginTop:5}}>Isotonic</Text>
                </View>
                <View style={{alignItems:'center', marginLeft:20, marginBottom:30}}>
                    <Image style={{width:100, height:100, objectFit:'contain'}} source={Soup}/>
                    <Text style={{color:'black', fontSize:15, fontWeight:'600', marginTop:5}}>Main Course</Text>
                </View>
            </View>
        </View>


        <ScrollView style={{ paddingLeft:30, marginTop:15}}>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'500', color:'black'}}>Popular For You</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Popular')}>
                    <Text style={{fontSize:15, fontWeight:'400', color:'blue', textAlign:'right', width:'60%'}}>See more</Text>
                </TouchableWithoutFeedback>
            </View>

            {recipes.isLoading ? <Text>Loading...</Text> :
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{display:'flex', flexDirection:'row', height:300}}>
                {recipes.data.slice(0,3).map(item => {
                    return (
                        <TouchableWithoutFeedback onPress={() => handlePress(item.id)} key={item.id}>
                        <View style={{marginHorizontal:5}}>
                            <Image style={{width:250, height:150, borderRadius:10, marginTop:20, position:'relative'}} source={{uri: `${item.photo}`}}/>
                            <View style={styles.popular}>
                                <Text numberOfLines={1} style={{color:'black', fontSize:15, fontWeight:'800'}}>{item.title}</Text>
                                <Text numberOfLines={1} style={{color:'black', overflow:'hidden', marginBottom:10, marginTop:10, height:20, width:'100%'}}>{item.ingredients}</Text>
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

export default Home



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
        paddingVertical: 10,
        marginVertical: 15,
        opacity: 0.6
    },
    popular: {
        paddingLeft:10,
        position:'absolute', 
        top:120, 
        borderWidth:1, 
        width:250, 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor:'white', 
        borderColor:'white',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
})