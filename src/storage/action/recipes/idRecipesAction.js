import axios from "axios";
import {BASE_URL} from '@env'



const IdRecipesAction = (id) => async (dispatch) => {
  try {
    dispatch({type : 'ID_RECIPES_REQUEST'})
    const result = await axios.get(`${BASE_URL}/recipes/${id}`)
    const menu = result.data.data
    dispatch({
      type: 'ID_RECIPES_SUCCESS', payload: menu})
  } catch (error) {
    dispatch({
      type: 'ID_RECIPES_FAILURE',
      payload: error.message
    })
  }
}


export default IdRecipesAction