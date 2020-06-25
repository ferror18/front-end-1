import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { deleteUser, logOut, getClasses, getEnrolledClasses } from "../actions"
import { useHistory } from "react-router-dom";
import { Settings } from "../components";
import Class from "./Class";

const Udash = ({logOut, getClasses, classes, getEnrolledClasses, enrolledClasses})=>{
    const history = useHistory()
    const logOutHandler = event => {
        logOut();
        history.push('/')
    }
    useEffect(() => {
        getClasses();
        getEnrolledClasses();

    }, [])

    return (
        <div>
        <h1>Client Dashboard</h1>
        <button onClick={logOutHandler}>LOG OUT</button>
        <Settings/>
        <Class classInfo={classes} enrolledClasses={enrolledClasses}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
        roleId: state.roleId,
        classes: state.classes,
        enrolledClasses: state.enrolledClasses
    }
}
export default connect(mapStateToProps,{ deleteUser, logOut, getClasses, getEnrolledClasses })(Udash)