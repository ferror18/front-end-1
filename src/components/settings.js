import React, { useState, useEffect } from "react";
import { deleteUser, updateUser} from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, FormLabel, Input, Button, Divider, Typography, TextField, Box } from "@material-ui/core";
import { StyledInnerForm, StyledForm } from "../styles/StyledClient";

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
    roleId: localStorage.getItem('roleId'),
    username: initialusername
    }
    const [ fval, setFval ] = useState(initState)
    const [ disabled, setDisable ] = useState(true)
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
        setDisable(false)

    }
    const deleteaccount = event => {
        deleteUser(initialid)
        history.push('/')
    }
    useEffect(()=>{
        if (fval.password !== '') {
            setDisable(true)
        }
    }, [fval])
    return (
        <Container maxWidth='xs' sytele={{backGroundColor: 'black'}}>
        <br/> <br/> <br/> <br/>
        <Typography variant='h1' >Account Settings</Typography><br/><br/>
        <br/><br/>
        <StyledForm onChange={onChange} color='light'>
            
            <TextField type='text' name="firstName" value={firstName}/>
            <FormLabel primary >First Name</FormLabel>
            <TextField type='text' name="lastName" value={lastName}/>
            <FormLabel primary >Last Name</FormLabel>
            
            <TextField type='text' name="email" value={email}/>
            <FormLabel primary >email</FormLabel>
            
            <TextField type='password' name="password" value={password} required/>
            <FormLabel primary >password</FormLabel>
            
            <TextField type='text' name="roleId" value={roleId}/>
            <FormLabel primary >role</FormLabel>
            
            <TextField  primary type='text' name="username" value={username}/>
            <FormLabel primary >username</FormLabel>
            <br/>
            <Button  onClick={onSubmit} size='large' variant='contained' color="primary">Save Changes</Button><br/><br/>
            <Divider/><br/><br/>
            <Button size='large' variant='contained' color="secondary" onClick={deleteaccount}>DELETE MY ACCOUNT</Button>
        </StyledForm><br/><br/>
        </Container>
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