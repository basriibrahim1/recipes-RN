import axios from "axios";
import {BASE_URL} from '@env'


const UserAction = (token) => async (dispatch) => {
  try {
    dispatch({type : 'USER_REQUEST'})
    const result = await axios.get(`${BASE_URL}/users/users`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    const menu = result.data.data
    dispatch({
      type: 'USER_SUCCESS', payload: menu} )
  } catch (error) {
    dispatch({
      type: 'USER_FAILURE',
      payload: error.message
    })
  }
}


export default UserAction