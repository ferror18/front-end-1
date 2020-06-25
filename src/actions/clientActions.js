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

export const USER_UPDATE_START = 'USER_UPDATE_START'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE'

export const USER_LOG_OUT_START = 'USER_LOG_OUT_START'
export const USER_LOG_OUT_SUCCESS = 'USER_LOG_OUT_SUCCESS'

export const CLASS_POST_START = 'CLASS_POST_START'
export const CLASS_POST_SUCCESS = 'CLASS_POST_SUCCESS'
export const CLASS_POST_FAILURE = 'CLASS_POST_FAILURE'

export const CLASS_PUT_START = 'CLASS_PUT_START'
export const CLASS_PUT_SUCCESS = 'CLASS_PUT_SUCCESS'
export const CLASS_PUT_FAILURE = 'CLASS_PUT_FAILURE'

export const CLASS_DELETE_START = 'CLASS_DELETE_START'
export const CLASS_DELETE_SUCCESS = 'CLASS_DELETE_SUCCESS'
export const CLASS_DELETE_FAILURE = 'CLASS_DELETE_FAILURE'

export const CLASS_UPDATE_START = 'CLASS_UPDATE_START'
export const CLASS_UPDATE_SUCCESS = 'CLASS_UPDATE_SUCCESS'
export const CLASS_UPDATE_FAILURE = 'CLASS_UPDATE_FAILURE'

export const CLASS_GET_START = 'CLASS_GET_START'
export const CLASS_GET_SUCCESS = 'CLASS_GET_SUCCESS'
export const CLASS_GET_FAILURE = 'CLASS_GET_FAILURE'

export const CATEGORY_POST_START = 'CATEGORY_POST_START'
export const CATEGORY_POST_SUCCESS = 'CATEGORY_POST_SUCCESS'
export const CATEGORY_POST_FAILURE = 'CATEGORY_POST_FAILURE'

export const CATEGORY_PUT_START = 'CATEGORY_PUT_START'
export const CATEGORY_PUT_SUCCESS = 'CATEGORY_PUT_SUCCESS'
export const CATEGORY_PUT_FAILURE = 'CATEGORY_PUT_FAILURE'

export const CATEGORY_DELETE_START = 'CATEGORY_DELETE_START'
export const CATEGORY_DELETE_SUCCESS = 'CATEGORY_DELETE_SUCCESS'
export const CATEGORY_DELETE_FAILURE = 'CATEGORY_DELETE_FAILURE'

export const CATEGORY_UPDATE_START = 'CATEGORY_UPDATE_START'
export const CATEGORY_UPDATE_SUCCESS = 'CATEGORY_UPDATE_SUCCESS'
export const CATEGORY_UPDATE_FAILURE = 'CATEGORY_UPDATE_FAILURE'

// USER ACTIONS
export const createUser = (newUser) => (dispatch) => {
    dispatch({ type: USER_POST_START })
    // console.log('store connected');
    axios.post(`${BASE_URL}auth/register`, newUser)
            .then(res => {
                // console.log(res.data)
                dispatch({ type: USER_POST_SUCCESS, payload: {roleId:'', id:'placeholder'} })
            })
            .catch(err => {
                // console.log(err)
                // console.log(err.message)
                dispatch({ type: USER_POST_FAILURE, payload: err.message })
            })
  }
export const loginUser = (userCredentials) => (dispatch) => {
  dispatch({ type: USER_POST_START })
  console.log(userCredentials);
  axiosWithAuth().post(`auth/login`, userCredentials)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
                console.log(localStorage.getItem('token'));
                localStorage.setItem("roleId", res.data.user.roleId)
                console.log(localStorage.getItem('roleId'));
                dispatch({ type: USER_POST_SUCCESS, payload: res.data.user })
                
            })
            .catch(err => {
              // console.log(err)
              dispatch({ type: USER_POST_FAILURE, payload: err.message })
                // setError("Unfortunately there is no record for that username and password. You can signup or try again.")
                // history.push('/login')
            })
}
export const logOut = () => (dispatch) => {
  dispatch({ type: USER_LOG_OUT_START})
  localStorage.clear()
  // console.log(localStorage.getItem('token'));
  dispatch({ type: USER_LOG_OUT_SUCCESS})
}
export const deleteUser = (userId) => (dispatch) => {
  dispatch({type: USER_DELETE_START})
  axiosWithAuth().delete('user', userId)
  .then((res)=>{console.log(res);localStorage.clear(); dispatch({type: USER_DELETE_SUCCESS, payload: res}); })
  .catch((err)=>{console.log(err); dispatch({type: USER_DELETE_FAILURE, payload: err})})
}
export const updateUser = (newUser) => (dispatch) => {
  dispatch({type: USER_UPDATE_START})
  console.log(newUser);
  
  axiosWithAuth().put('user', newUser)
  .then((res)=>{console.log(res); dispatch({type: USER_UPDATE_SUCCESS, payload: res})})
  .catch((err)=>{console.log(err); dispatch({type: USER_UPDATE_FAILURE, payload: err})})
}

// CLASS ACTIONS
//general
export const getClasses = () => (dispatch) => {
  dispatch({type: CLASS_GET_START})
  axiosWithAuth().get(`classes`)  
    .then((res) => {
      console.log(res)
      dispatch({type: CLASS_GET_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: CLASS_GET_FAILURE, payload: err.message})
    })
}
//user

//instructor
export const createClass = (newClass) => (dispatch) => {
  dispatch({type: CLASS_POST_START,})
  axiosWithAuth().post('classes', newClass)
  .then((res)=>{
    console.log(res);
    dispatch({type: CLASS_POST_SUCCESS, payload: res.data})
  })
  .catch((err)=>{
    console.log(err);
    dispatch({type: CLASS_POST_FAILURE, payload: err.message})
  })
}