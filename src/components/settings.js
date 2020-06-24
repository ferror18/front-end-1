import React, { useState } from "react";
import { deleteUser, updateUser} from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Settings = ({ 
    initialfirstName,
    initiallastName,
    initialemail,
    initialpassword,
    initialroleId,
    initialusername,
    initialid,
    deleteUser,
    updateUser
    })=>{
    const history = useHistory()
    const initState = {
    firstName: initialfirstName,
    lastName: initiallastName,
    email: initialemail,
    password: initialpassword,
    roleId: initialroleId,
    username: initialusername
    }
    const [ fval, setFval ] = useState(initState)
    const [ hide, setHide ] = useState(true)
    const {
    firstName,
    lastName,
    email,
    password,
    roleId,
    username
    } = fval
    const onChange = event => {
        setFval({...fval,
        [event.target.name]:event.target.value
        })
    }
    const onSubmit = event => {
        event.preventDefault()
        updateUser(fval)

    }
    const deleteaccount = event => {
        deleteUser(initialid)
        history.push('/')
    }
    return (
        <div>
        <button onClick={()=>{setHide(!hide)}}>SETTINGS</button>
        <div hidden={hide}>
        <h1>SETTINGS</h1><br/><br/>
        <button onClick={deleteaccount}>DELETE MY ACCOUNT</button>
        <br/><br/>
        <h2>User Details</h2>
        <form onSubmit={onSubmit} onChange={onChange} >
            <label>First Name</label>
            <input type='text' name="firstName" value={firstName}/>
            <label>Last Name</label>
            <input type='text' name="lastName" value={lastName}/>
            <label>email</label>
            <input type='text' name="email" value={email}/>
            <label>password</label>
            <input type='password' name="password" value={password} required/>
            <label>role</label>
            <input type='text' name="roleId" value={roleId}/>
            <label>username</label>
            <input type='text' name="username" value={username}/>
            <br/>
            <input type='submit' value='Save Changes'/>
        </form><br/><br/>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        initialfirstName: state.firstName,
        initiallastName: state.lastName,
        initialemail: state.email,
        initialpassword: state.password,
        initialroleId: state.roleId,
        initialusername: state.username,
        initialid: state.id,
    }
}
export default connect(mapStateToProps,{ updateUser, deleteUser })(Settings)