import axios from "axios";
import {BASE_URL} from '@env'
import { ToastAndroid } from "react-native";


const EditRecipesAction = (id, token, formData, navigation) => async (dispatch) => {
  try {
    dispatch({type : 'EDIT_RECIPES_REQUEST'})
    const result = await axios.put(`${BASE_URL}/recipes/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        }
    })
    ToastAndroid.showWithGravity(
      'Loading....',
      ToastAndroid.TOP,
      ToastAndroid.LONG
    )
    const menu = result.data
    dispatch({
      type: 'EDIT_RECIPES_SUCCESS', payload: menu})
      ToastAndroid.showWithGravity(
        'Success....',
        ToastAndroid.TOP,
        ToastAndroid.LONG
    )
      navigation.navigate('Recipes', {key: new Date().getTime()})
  } catch (error) {
    dispatch({
      type: 'EDIT_RECIPES_FAILURE',
      payload: error.message
    })
    ToastAndroid.showWithGravity(
      'Failed....',
      ToastAndroid.TOP,
      ToastAndroid.LONG
  )
  }
}


export default EditRecipesAction