import React, { useEffect } from "react"
import { connect } from "react-redux"
import { logOut, getClasses, getEnrolledClasses } from "../actions"
import { useHistory } from "react-router-dom";
import { Settings, ClassForm, Class } from "../components";
import { Box, Typography } from '@material-ui/core';

const Idash = ({ logOut, deleteUser, id, classes, getClasses, getEnrolledClasses, enrolledClasses})=>{
   
    const history = useHistory()
    const logOutHandler = event => {
        logOut()
        history.push('/')
    }

    useEffect(() => {
        getClasses();
        getEnrolledClasses();

    }, [])

    return (
        <Box>
        <Typography variant='h1'>Instructor Dashboard</Typography>
        <button onClick={logOutHandler}>LOG OUT</button>
        <Settings/>
        <ClassForm/>
        <Class classInfo={classes} enrolledClasses={enrolledClasses}/>
        </Box>
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