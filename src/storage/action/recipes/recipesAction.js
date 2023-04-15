import axios from "axios";
import {BASE_URL} from '@env'

const RecipesAction = (search='') => async (dispatch) => {
  try {
    dispatch({type : 'RECIPES_REQUEST'})
    const result = await axios.get(`${BASE_URL}/recipes?search=${search}`)
    const menu = result.data.data
    dispatch({
      type: 'RECIPES_SUCCESS', payload: menu} )
  } catch (error) {
    dispatch({
      type: 'RECIPES_FAILURE',
      payload: error.message
    })
  }
}


export default RecipesAction