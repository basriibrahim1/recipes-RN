import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialIcons'
import Like from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../storage/action/auth/login'
import { useNavigation } from '@react-navigation/native'
import UserAction from '../../storage/action/profile/userAction'

const Profile = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const token = useSelector(state => state.login.data)
    const user = useSelector(state => state.user.data)

    useEffect(() => {
        dispatch(UserAction(token.token))
    },[])

  return (
        !user ? navigation.navigate('Login') 
       
        : 
        user.map(item => (
            <View key={item.id}>
            <View style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:"#EEC302", height:400, position:'absolute', width:'100%'}}>
               <Image style={{height:100, width:100, borderRadius:50}} source={{uri: `${item.photo}`}}/>
               <Text style={{fontSize:25, color:'white', fontWeight:'800', marginTop:4}}>{item.fullname}</Text> 
            </View>
               
           <View style={{backgroundColor:'white', marginHorizontal:10, height:500, position:'relative', marginTop:300, borderTopStartRadius:20, borderTopRightRadius:20}}>
               <View style={styles.profileContainer}>
                   <Icon name='person-outline' size={30} color='#EEC302' />
                   <Text style={styles.profile}>Edit Profile</Text>
                   <Material style={{textAlign:'right', width:'54%'}} name='navigate-next' size={35}/>
               </View>
               <View style={styles.profileContainer}>
                   <Icon name='list-outline' size={30} color='#EEC302' />
                   <Text style={styles.profile}>My Recipes</Text>
                   <Material style={{textAlign:'right', width:'53%'}} name='navigate-next' size={35}/>
               </View>
               <View style={styles.profileContainer}>
                   <Icon name='bookmark-outline' size={30} color='#EEC302' />
                   <Text style={styles.profile}>Saved Recipes</Text>
                   <Material style={{textAlign:'right', width:'46%'}} name='navigate-next' size={35}/>
               </View>
               <View style={styles.profileContainer}>
                   <Like name='like2' size={30} color='#EEC302' />
                   <Text style={styles.profile}>Liked Recipes</Text>
                   <Material style={{textAlign:'right', width:'48%'}} name='navigate-next' size={35}/>
               </View>
               <TouchableHighlight onPress={() => dispatch(logout())}>
               <View style={styles.profileContainer}>
                   <Material name='logout' size={30} color='#EEC302' />
                   <Text style={styles.profile}>Logout</Text>
                   <Material style={{textAlign:'right', width:'64%'}} name='navigate-next' size={35}/>
               </View>
               </TouchableHighlight>
           </View>
           </View>
        ))
       
        )
}

export default Profile


const styles = StyleSheet.create({
    profile:{
        fontSize:20,
        fontWeight:'600',
        color:'black',
        marginLeft: 10
    },

    profileContainer:{
        display: 'flex', 
        flexDirection:'row', 
        alignItems:'flex-end',
        marginLeft: 20,
        marginTop:40,
        width:'100%'
    }
})