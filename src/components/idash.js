import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteUser, logOut, updateUser } from "../actions"
import { useHistory } from "react-router-dom";
import { Settings, ClassForm } from "../components";

const Idash = ({ updateUser, logOut, deleteUser, id})=>{
    const history = useHistory()
    const deleteaccount = event => {
        deleteUser(id);
        history.push('/')
    }
    const logOutHandler = event => {
        logOut()
        history.push('/')
    }
    return (
        <div>
        <h1>Instructor Dashboard</h1>
        <button onClick={logOutHandler}>LOG OUT</button>
        <Settings/>
        <ClassForm/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.id
    }
}
export default connect(mapStateToProps,{ logOut })(Idash)