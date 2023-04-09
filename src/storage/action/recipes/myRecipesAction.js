import axios from "axios";
import {BASE_URL} from '@env'
import { ToastAndroid } from "react-native";

const MyRecipesAction = (token) => async (dispatch) => {
  try {
    dispatch({type : 'MY_RECIPES_REQUEST'})
    const result = await axios.get(`${BASE_URL}/recipes/user-recipes/recipes`, {
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
      type: 'MY_RECIPES_SUCCESS', payload: menu} )
      ToastAndroid.showWithGravity(
        'Success....',
        ToastAndroid.TOP,
        ToastAndroid.LONG
    )
  } catch (error) {
    dispatch({
      type: 'MY_RECIPES_FAILURE',
      payload: error.message
    })
    ToastAndroid.showWithGravity(
      'Failed....',
      ToastAndroid.TOP,
      ToastAndroid.LONG
  )
  }
}


export default MyRecipesAction