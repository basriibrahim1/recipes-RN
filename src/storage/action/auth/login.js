import axios from "axios"
import {BASE_URL} from '@env'
import { Toast } from "native-base"

const ToastLogin = () => {
    return Toast.show({
      title: 'Username atau password salah',
      placement: 'top'
    })
  }
  
  export const LoginAction = (data) => async (dispatch) => {
    try {
      dispatch({ type: "LOGIN_REQUEST" })
      const result = await axios.post(`${BASE_URL}/auth/login`, data)
      const user = result.data.data
      result.data.data && dispatch({ type: "LOGIN_SUCCESS", payload: user })
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message })
      ToastLogin()
    }
  }


export const logout = () => {
    return(dispatch, getState) => {
        dispatch({type:"DELETE_TOKEN"})
    }
}