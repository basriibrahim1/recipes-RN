import axios from "axios";
import {BASE_URL} from '@env'
import { ToastAndroid } from "react-native"


const RecipesAction = (search='') => async (dispatch) => {
  try {
    dispatch({type : 'RECIPES_REQUEST'})
    const result = await axios.get(`${BASE_URL}/recipes?search=${search}`)
    ToastAndroid.showWithGravity(
      'Loading....',
      ToastAndroid.TOP,
      ToastAndroid.LONG
  )
    const menu = result.data.data
    dispatch({
      type: 'RECIPES_SUCCESS', payload: menu} )
      ToastAndroid.showWithGravity(
        'Success....',
        ToastAndroid.TOP,
        ToastAndroid.LONG
    )
  } catch (error) {
    dispatch({
      type: 'RECIPES_FAILURE',
      payload: error.message
    })
    ToastAndroid.showWithGravity(
      'Failed....',
      ToastAndroid.TOP,
      ToastAndroid.LONG
  )
  }
}


export default RecipesAction