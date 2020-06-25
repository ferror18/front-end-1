import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { deleteUser, logOut, getClasses, getEnrolledClasses } from "../actions"
import { useHistory } from "react-router-dom";
import { Settings, ClassForm, Class } from "../components";
import { axiosWithAuth } from "../utils";

const Idash = ({ logOut, deleteUser, id, classes, getClasses, getEnrolledClasses, enrolledClasses})=>{
   
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
        getEnrolledClasses();

    }, [])

    return (
        <div>
        <h1>Instructor Dashboard</h1>
        <button onClick={logOutHandler}>LOG OUT</button>
        <Settings/>
        <ClassForm/>
        <Class classInfo={classes} enrolledClasses={enrolledClasses}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.id, 
        classes: state.classes,
        enrolledClasses: state.enrolledClasses
    }
}
export default connect(mapStateToProps,{ logOut, getClasses, getEnrolledClasses })(Idash)