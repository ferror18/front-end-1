import React from "react"
import { connect } from "react-redux"
import { createUser } from "../actions";

const Nav = ({username, password, roleId, error, createUser})=>{
    return (
        <div>
        <h1>Navigation Menu</h1>
        <button name='Create User' onClick={()=>{createUser({username:username,password:password,roleId:roleId})}} >Creater User { username }</button>
        <button name='Login' onClick={()=>{}}>Log In as {username}</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      username: state.username,
      password: state.password,
      roleId: state.roleId,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, { createUser })(Nav)