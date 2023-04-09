import axios from "axios";
import {BASE_URL} from '@env'
import { ToastAndroid } from "react-native";



const InsertRecipesAction = (formData, token, navigation) => async (dispatch) => {
  try {
    dispatch({type : 'INSERT_RECIPES_REQUEST'})
    const result = await axios.post(`${BASE_URL}/recipes`, formData, {
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
    const menu = result.data.data
    dispatch({type: 'INSERT_RECIPES_SUCCESS', payload: menu})
    ToastAndroid.showWithGravity(
      'Success....',
      ToastAndroid.TOP,
      ToastAndroid.LONG
  )
    navigation.navigate('Recipes')

  } catch (error) {
    dispatch({
      type: 'INSERT_RECIPES_FAILURE',
      payload: error.message
    })
    ToastAndroid.showWithGravity(
      'Failed....',
      ToastAndroid.TOP,
      ToastAndroid.LONG
  )
  }
}


export default InsertRecipesAction