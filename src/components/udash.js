import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { deleteUser, logOut, getClasses } from "../actions"
import { useHistory } from "react-router-dom";
import { Settings } from "../components";
import Class from "./Class";

const Udash = ({logOut, getClasses, classes})=>{
    const history = useHistory()
    const logOutHandler = event => {
        logOut();
        history.push('/')
    }
    useEffect(() => {
        getClasses();
    }, [])

    return (
        <div>
        <h1>Client Dashboard</h1>
        <button onClick={logOutHandler}>LOG OUT</button>
        <Settings/>
        <Class classInfo={classes}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
        roleId: state.roleId,
        classes: state.classes
    }
}
export default connect(mapStateToProps,{ deleteUser, logOut, getClasses })(Udash)