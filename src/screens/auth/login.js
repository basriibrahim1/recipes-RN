import {StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { LoginAction } from '../../storage/action/auth/login'
import { Button, Input, Text, View } from 'native-base'
import Loading from '../../components/loading/loading'

const Login = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const data = useSelector(state => state.login)
  console.log(data.isLoading)

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
        <Text fontSize={30} textAlign={'center'} color={'green.400'}>WELCOME</Text>
        <Text style={{textAlign: 'center', marginTop:20}}>Log in to your existing account</Text>
        <View style={{paddingHorizontal:30, marginTop:15}}>
            <Input pl={5} rounded={10} py={3} fontSize={15} borderColor={'#EFC81A'} placeholder='Enter your email address' placeholderTextColor='grey' value={email} onChangeText={onChangeEmail} autoComplete='email'/>
            <Input pl={5} rounded={10} marginTop={5} py={3} fontSize={15} borderColor={'#EFC81A'} placeholder='Enter your password' placeholderTextColor='grey' value={password} onChangeText={(value) => setPassword(value)} autoComplete='off' secureTextEntry={true}/>
       </View>
        <Text style={{textAlign: 'right', marginRight:30, marginTop:5}}>Forgot Password?</Text>
        <Button style={styles.button} onPress={onSubmit}>
            {data.isLoading ? <Loading /> : <Text style={{textAlign:'center', color:'white', fontWeight:'700'}}>LOGIN</Text>}
        </Button>
        <View style={styles.register}>
            <Text>Don't have any account?</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Register')}><Text style={{marginLeft:5, color:'#EFC81A'}}>Sign Up</Text></TouchableHighlight>
        </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        height:'100%',
        width: '100%',
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
