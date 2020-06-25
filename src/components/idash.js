import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { deleteUser, logOut, updateUser, getClasses } from "../actions"
import { useHistory } from "react-router-dom";
import { Settings, ClassForm, Class } from "../components";
import { axiosWithAuth } from "../utils";

const Idash = ({ updateUser, logOut, deleteUser, id, classes, getClasses})=>{
   
    const history = useHistory()
    const deleteaccount = event => {
        deleteUser(id);
        history.push('/')
    }
    const logOutHandler = event => {
        logOut()
        history.push('/')
    }

    useEffect(() => {
        getClasses();
    }, [])

    return (
        <div>
        <h1>Instructor Dashboard</h1>
        <button onClick={logOutHandler}>LOG OUT</button>
        <Settings/>
        <ClassForm/>
        <Class classInfo={classes}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.id, 
        classes: state.classes 
    }
}
export default connect(mapStateToProps,{ logOut, getClasses })(Idash)