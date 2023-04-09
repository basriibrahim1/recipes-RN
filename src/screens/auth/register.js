import { View, Text, SafeAreaView, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { RegisterAction } from '../../storage/action/auth/register'

const Register = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()



    const handleSubmit = () => {
        const data = {
            fullname : name,
            email: email,
            password: password
        }
        dispatch(RegisterAction(data, navigation))
    }

  return (
    <View style={styles.container}>


        <Text style={{textAlign: 'center', fontSize:30}}>Let's Get Started !</Text>
        <Text style={{textAlign: 'center', marginTop:20}}>Create new account to access all features</Text>
        
        <View style={{paddingHorizontal:30, marginTop:15}}>
            <TextInput style={styles.input} placeholder='Name' onChangeText={setName} placeholderTextColor='black' autoComplete='name'/>
            <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail} placeholderTextColor='black' autoComplete='email' />
            <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} placeholderTextColor='black' autoComplete='password' secureTextEntry={true}/>
       </View>


        <TouchableHighlight style={styles.button} underlayColor='green' onPress={handleSubmit}><Text style={{textAlign:'center', color:'white'}}>REGISTER</Text></TouchableHighlight>
        
        <View style={styles.register}>
            <Text>Already have account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{marginLeft:5, color:'#EFC81A'}}>Login Here</Text></TouchableOpacity>
        </View>
      
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    register: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 20
    },
    input:{
        borderWidth: 1,
        borderColor: '#EFC81A',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 10
    },
    button: {
        backgroundColor: '#EFC81A',
        padding: 10,
        marginHorizontal: 30,
        borderRadius: 10,
        marginTop: 10
    }
})
