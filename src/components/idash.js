import React, { useEffect } from "react"
import { connect } from "react-redux"
import { logOut, getClasses, getEnrolledClasses, getCategories } from "../actions"
import { useHistory } from "react-router-dom";
import { Settings, ClassForm, Class } from "../components";
import { Box, Typography } from '@material-ui/core';

const Idash = ({ getCategories, logOut, deleteUser, id, classes, getClasses, getEnrolledClasses, enrolledClasses})=>{
    
    const history = useHistory()

    useEffect(() => {
        getClasses();
        getEnrolledClasses();
        getCategories();

    }, [])

    return (
        <Box>
            <br/> <br/> <br/> <br/>
        <Typography variant='h1'>Instructor Dashboard</Typography>
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
export default connect(mapStateToProps,{ logOut, getClasses, getEnrolledClasses, getCategories})(Idash)