import axios from "axios";
import {BASE_URL} from '@env'
import { useSelector } from "react-redux";


const UserAction = () => async (dispatch) => {
  try {
    const token = useSelector(state => state.login.data.token)
    console.log(token)
    dispatch({type : 'USER_REQUEST'})
    const result = await axios.delete(`${BASE_URL}/users/users`, {
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