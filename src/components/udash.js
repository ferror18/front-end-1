import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteUser, logOut } from "../actions"
import { useHistory } from "react-router-dom";
import { Settings } from "../components";

const Udash = ({logOut})=>{
    const history = useHistory()
    const logOutHandler = event => {
        logOut();
        history.push('/')
    }
    return (
        <div>
        <h1>User Dashboard</h1>
        <button onClick={logOutHandler}>LOG OUT</button>
        <Settings/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
        roleId: state.roleId
    }
}
export default connect(mapStateToProps,{ deleteUser, logOut })(Udash)