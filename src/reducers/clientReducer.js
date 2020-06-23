import { 
    USER_POST_START,
    USER_POST_SUCCESS,
    USER_POST_FAILURE
 } from "../actions";
  // 1. create initial state
  const initialState = {
    username: "username5",
    password: "password",
    roleId: 2,
    error: ""
   }
  
  // 2. pass state
  export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_POST_START:
        return {
          ...state,
          error: '',
        }
      case USER_POST_SUCCESS:
          console.log('User Created');
          
        return {
          ...state,
          error: '',
        }
      case USER_POST_FAILURE:
        return {
          ...state,
          error: action.payload,
        }
      default:
        return state
    }
  }