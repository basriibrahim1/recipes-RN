import axios from "axios";
import {BASE_URL} from '@env'
import { Toast } from "native-base";


const ToastLogin = (pesan) => {
  return Toast.show({
    title: pesan,
    placement: 'top'
  })
}

const InsertRecipesAction = (formData, token, navigation) => async (dispatch) => {
  try {
    dispatch({type : 'INSERT_RECIPES_REQUEST'})
    const result = await axios.post(`${BASE_URL}/recipes`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        }
    }, ToastLogin('Tunggu bentar ya, lagi loading...'))
    const menu = result.data
    dispatch({type: 'INSERT_RECIPES_SUCCESS', payload: menu})
    navigation.navigate('Recipes')
  } catch (error) {
    dispatch({
      type: 'INSERT_RECIPES_FAILURE',
      payload: error.message
    })
    ToastLogin('Yah.. gagal, coba lagi ya!')
  }
}


export default InsertRecipesAction