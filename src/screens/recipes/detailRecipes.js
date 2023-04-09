import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import egg from '../../assets/Image/egg.png'
import Like from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Ionicons'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IdRecipesAction from '../../storage/action/recipes/idRecipesAction'

const DetailRecipes = () => {

    const route = useRoute()
    const dispatch = useDispatch()
    const item = route.params.id


    const data = useSelector(state => state.idRecipes.data)

    useEffect(() => {
        dispatch(IdRecipesAction(item))
    },[dispatch])


  return (
    <View>

        {data.map((item) => {
            return (

                <View key={item.id}>
            <Image source={{uri : `${item.photo}`}} style={{width:'100%', height:400, position:'absolute',resizeMode:'cover'}} key={item.id}/>
            <View style={{display:'flex', flexDirection:'row', height:350, alignItems:'flex-end', justifyContent:'space-around', width:'100%'}}>
                <View style={{width:'70%', marginLeft:20}}>
                    <Text style={{fontSize:30, color:'white', backgroundColor:'rgba(0,0,0,0.5)'}}>{item.title}</Text>
                    <Text style={{color:'white', fontSize: 20, backgroundColor:'rgba(0,0,0,0.5)'}}>By {item.creator}</Text>
                </View>
                <View style={{display:'flex', flexDirection:'row', marginRight:20}}>
                    <View>
                        <TouchableWithoutFeedback useForeground={false}>
                            <Icon name='bookmark'  size={40} color='#EEC302' />
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <TouchableWithoutFeedback useForeground={false}>
                            <Like name='heart-outlined' size={40} color='#EEC302' />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'white', height:400, borderTopLeftRadius:10, borderTopRightRadius:10, marginHorizontal:5, marginTop:10}}>
                <Text style={{color:'black', fontSize:20, marginLeft:30, marginTop:15}}>Ingredients</Text>
                <Text style={{backgroundColor:'#FAF7ED', marginHorizontal:30, marginTop:25, fontSize:15, paddingLeft:20}}>
                    {item.ingredients}
                </Text>
            </View>
        </View>

            )
        })}
        
    </View>
  )
}

export default DetailRecipes