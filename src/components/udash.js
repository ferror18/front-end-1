import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { needToUpdate, getCategories, deleteUser, logOut, getClasses, getEnrolledClasses } from "../actions"
import { Settings } from "../components";
import Class from "./Class";
import { Box } from '@material-ui/core';

const Udash = ({ needToUpdate, update, getCategories, logOut, getClasses, classes, getEnrolledClasses, enrolledClasses})=>{
    
    
    
    useEffect(() => {
        if (update === true) {
            getCategories();
            getClasses();
            getEnrolledClasses();
            needToUpdate(false)
        }

    }, [ classes, enrolledClasses])

    return (
        <Box>
            <br/> <br/> <br/> <br/>
        <h1>Client Dashboard</h1>
        <Class classInfo={classes} enrolledClasses={enrolledClasses}/>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
        roleId: state.roleId,
        classes: state.classes,
        enrolledClasses: state.enrolledClasses,
        categories: state.categories,
        update: state.update
    }
}
export default connect(mapStateToProps,{ needToUpdate, getCategories, deleteUser, logOut, getClasses, getEnrolledClasses })(Udash)