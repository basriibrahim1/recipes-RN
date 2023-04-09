import axios from "axios";
import {BASE_URL} from '@env'
import { ToastAndroid } from "react-native";


const DeleteRecipesAction = (id, token) => async (dispatch) => {
  try {
    dispatch({type : 'DELETE_RECIPES_REQUEST'})
    const result = await axios.delete(`${BASE_URL}/recipes/${id}`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    ToastAndroid.showWithGravity(
      'Loading....',
      ToastAndroid.TOP,
      ToastAndroid.LONG
    )
    const menu = result.data.data
    dispatch({
      type: 'DELETE_RECIPES_SUCCESS', payload: menu} )
      ToastAndroid.showWithGravity(
        'Success....',
        ToastAndroid.TOP,
        ToastAndroid.LONG
    )
  } catch (error) {
    dispatch({
      type: 'DELETE_RECIPES_FAILURE',
      payload: error.message
    })
    ToastAndroid.showWithGravity(
      'Failed....',
      ToastAndroid.TOP,
      ToastAndroid.LONG
  )
  }
}


export default DeleteRecipesAction