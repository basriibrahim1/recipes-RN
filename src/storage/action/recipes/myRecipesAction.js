import axios from "axios";
import {BASE_URL} from '@env'

const MyRecipesAction = (token) => async (dispatch) => {
  try {
    dispatch({type : 'MY_RECIPES_REQUEST'})
    const result = await axios.get(`${BASE_URL}/recipes/user-recipes/recipes`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    const menu = result.data.data
    dispatch({
      type: 'MY_RECIPES_SUCCESS', payload: menu} )
  } catch (error) {
    dispatch({
      type: 'MY_RECIPES_FAILURE',
      payload: error.message
    })
  }
}


export default MyRecipesAction