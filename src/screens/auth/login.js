import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { LoginAction } from '../../storage/action/auth/login'

const Login = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (value) => {
    setEmail(value)
  }

  const onSubmit = () => {
    let data = {
        email: email, 
        password: password
    }

    dispatch(LoginAction(data))
  }

  return (
    <View style={styles.container}>


        <Text style={{textAlign: 'center', fontSize:30}}>WELCOME</Text>
        <Text style={{textAlign: 'center', marginTop:20}}>Log in to your existing account</Text>
        
        <View style={{paddingHorizontal:30, marginTop:15}}>
            <TextInput style={styles.input} placeholder='Enter your email address' placeholderTextColor='black' value={email} onChangeText={onChangeEmail} autoComplete='email'/>
            <TextInput style={styles.input} placeholder='Enter your password' placeholderTextColor='black' value={password} onChangeText={value => setPassword(value)} autoComplete='password' secureTextEntry={true}/>
       </View>

        <Text style={{textAlign: 'right', marginRight:30, marginTop:5}}>Forgot Password?</Text>


        <TouchableOpacity style={styles.button} onPress={onSubmit}><Text style={{textAlign:'center', color:'white'}}>LOGIN</Text></TouchableOpacity>
        
        <View style={styles.register}>
            <Text>Don't have any account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{marginLeft:5, color:'#EFC81A'}}>Sign Up</Text></TouchableOpacity>
        </View>
      
    </View>
  )
}

export default Login

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
