import axios from "axios"
import { ToastAndroid } from "react-native"
import {BASE_URL} from '@env'


export const LoginAction = (data) => async (dispatch) => {
    try{
        dispatch({type:"LOGIN_REQUEST"})
        const result = await axios.post(`${BASE_URL}/auth/login`, data)
        ToastAndroid.showWithGravity(
            'Loading....',
            ToastAndroid.TOP,
            ToastAndroid.LONG
        )
        const user = result.data.data
        result.data.data && dispatch({type:"LOGIN_SUCCESS",payload:user})
        ToastAndroid.showWithGravity(
            'Login Success',
            ToastAndroid.TOP,
            ToastAndroid.LONG
        )
    } catch(err){
        dispatch({type:"LOGIN_FAILURE"})
        ToastAndroid.showWithGravity(
            'Login Failed',
            ToastAndroid.TOP,
            ToastAndroid.LONG
          )
    }
}


export const logout = () => {
    return(dispatch, getState) => {
        dispatch({type:"DELETE_TOKEN"})
    }
}