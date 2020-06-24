import { 
  USER_POST_START,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
  USER_PUT_START,
  USER_PUT_SUCCESS,
  USER_PUT_FAILURE,
  USER_DELETE_START,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE
 } from "../actions";
  // 1. create initial state
  const initialState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    roleId: ''
}
  
  // 2. pass state
  export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_POST_START:
        console.log(action.type);
        return {
          ...state,
          error: ''
        }
      case USER_POST_SUCCESS:
        console.log(action.type, action.payload);
        return {
          ...state,
          roleId: action.payload.roleId,
          error: '',
        }
      case USER_POST_FAILURE:
        console.log(action.type, action.payload);
        return {
          ...state,
          error: action.payload,
        }
        case USER_PUT_START:
        console.log(action.type);
        return {
          ...state,
          error: ''
        }
      case USER_PUT_SUCCESS:
        console.log(action.type, action.payload);
        return {
          ...state,
          roleId: action.payload.roleId,
          error: '',
        }
      case USER_PUT_FAILURE:
        console.log(action.type, action.payload);
        return {
          ...state,
          error: action.payload,
        }
        case USER_DELETE_START:
        console.log(action.type);
        return {
          ...state,
          error: ''
        }
      case USER_DELETE_SUCCESS:
        console.log(action.type, action.payload);
        return {
          ...state,
          error: '',
        }
      case USER_DELETE_FAILURE:
        console.log(action.type, action.payload);
        return {
          ...state,
        }
      default:
        return state
    }
  }