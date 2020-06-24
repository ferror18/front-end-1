import axios from 'axios'
import { BASE_URL } from '../constants'
// setting the action types to variables for easier debugging
export const USER_POST_START = 'USER_POST_START'
export const USER_POST_SUCCESS = 'USER_POST_SUCCESS'
export const USER_POST_FAILURE = 'USER_POST_FAILURE'
export const createUser = (newUser) => (dispatch) => {
    dispatch({ type: USER_POST_START })
    axios
      .post(`${BASE_URL}auth/register`, newUser)
      .then((res) => {console.log(res); dispatch({ type: USER_POST_SUCCESS, payload: res.data })})
      .catch((err) => {console.log(err);dispatch({ type: USER_POST_FAILURE, payload: err.response })})
  }