import axios from "axios";
import {BASE_URL} from '@env'
import { Toast } from "native-base";


const ToastLogin = (message) => {
  return Toast.show({
    title: message,
    placement: 'top'
  })
}

const DeleteRecipesAction = (id, token) => async (dispatch) => {
  try {
    dispatch({type : 'DELETE_RECIPES_REQUEST'})
    const result = await axios.delete(`${BASE_URL}/recipes/${id}`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    const menu = result.data.data
    dispatch({type: 'DELETE_RECIPES_SUCCESS', payload: menu})
    ToastLogin('Recipes berhasil di delete, refresh untuk mendapatkan data yang baru ya!')
  } catch (error) {
    dispatch({
      type: 'DELETE_RECIPES_FAILURE',
      payload: error.message
    })
  }
}


export default DeleteRecipesAction