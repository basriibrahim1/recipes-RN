import axios from "axios"
import { ToastAndroid } from "react-native"
import {BASE_URL} from '@env'


export const RegisterAction = (data, navigation) => async (dispatch) => {
    try{
        dispatch({type:"REGISTER_REQUEST"})
        const result = await axios.post(`${BASE_URL}/auth/register`, data)
        ToastAndroid.showWithGravity(
            'Loading....',
            ToastAndroid.TOP,
            ToastAndroid.LONG
        )
        const user = result.data
        dispatch({type:"REGISTER_SUCCESS",payload:user}
        )
        ToastAndroid.showWithGravity(
            'Register Success',
            ToastAndroid.TOP,
            ToastAndroid.LONG
        )
        navigation.navigate('Login')
    } catch(err){
        dispatch({type:"REGISTER_FAILURE"})
        ToastAndroid.showWithGravity(
            'Register Failed',
            ToastAndroid.TOP,
            ToastAndroid.LONG
          )
    }
}