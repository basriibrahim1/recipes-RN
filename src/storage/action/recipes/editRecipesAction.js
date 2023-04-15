import axios from "axios";
import {BASE_URL} from '@env'
import { Toast } from "native-base";


const ToastLogin = (message) => {
  return Toast.show({
    title: message,
    placement: 'top'
  })
}

const EditRecipesAction = (id, token, formData, navigation) => async (dispatch) => {
  try {
    dispatch({type : 'EDIT_RECIPES_REQUEST'})
    const result = await axios.put(`${BASE_URL}/recipes/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        }
      }, ToastLogin('Tunggu bentar ya lagi loading..'))
      const menu = result.data
    
    dispatch({
    type: 'EDIT_RECIPES_SUCCESS', payload: menu})
    navigation.navigate('Recipes')
  } catch (error) {
    dispatch({
      type: 'EDIT_RECIPES_FAILURE',
      payload: error.message
    }, ToastLogin('Yah.. gagal, coba lagi ya!'))
    
  }
}


export default EditRecipesAction