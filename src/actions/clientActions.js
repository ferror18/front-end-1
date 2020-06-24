import axios from 'axios'
import { BASE_URL } from '../constants'
import { axiosWithAuth } from "../utils";
// setting the action types to variables for easier debugging
export const USER_POST_START = 'USER_POST_START'
export const USER_POST_SUCCESS = 'USER_POST_SUCCESS'
export const USER_POST_FAILURE = 'USER_POST_FAILURE'

export const USER_PUT_START = 'USER_PUT_START'
export const USER_PUT_SUCCESS = 'USER_PUT_SUCCESS'
export const USER_PUT_FAILURE = 'USER_PUT_FAILURE'

export const USER_DELETE_START = 'USER_DELETE_START'
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'
export const USER_DELETE_FAILURE = 'USER_DELETE_FAILURE'
export const createUser = (newUser) => (dispatch) => {
    dispatch({ type: USER_POST_START })
    // console.log('store connected');
    axios.post(`${BASE_URL}auth/register`, newUser)
            .then(res => {
                // console.log(res.data)
                dispatch({ type: USER_POST_SUCCESS, payload: res.data })
            })
            .catch(err => {
                // console.log(err)
                // console.log(err.message)
                dispatch({ type: USER_POST_FAILURE, payload: err.response })
            })
  }
export const loginUser = (userCredentials) => (dispatch) => {
  dispatch({ type: USER_POST_START })
  // console.log(userCredentials);
  
  axiosWithAuth().post(`auth/login`, userCredentials)
            .then(res => {
                // console.log(res)
                localStorage.setItem("token", res.data.token)
                console.log(localStorage.getItem('token'));
                dispatch({ type: USER_POST_SUCCESS, payload: res.data.user })
                
            })
            .catch(err => {
              // console.log(err)
              dispatch({ type: USER_POST_FAILURE, payload: err.message })
                // setError("Unfortunately there is no record for that username and password. You can signup or try again.")
                // history.push('/login')
            })
}
export const deleteUser = (userId) => (dispatch) => {
  dispatch({type: USER_DELETE_START})
  axiosWithAuth().delete('user', userId)
  .then(res=>{console.log(res), dispatch({type: USER_DELETE_SUCCESS, payload: res})})
  .catch(err=>console.log(err), dispatch({type: USER_DELETE_FAILURE, payload: err}))
}