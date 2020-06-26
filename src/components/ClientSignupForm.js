import React from 'react';
import {StyledForm, StyledButton, StyledErrorDiv, StyledInnerForm} from '../styles/StyledClient'
import { TextField, MenuItem, Select, InputLabel, FormControl, Button } from '@material-ui/core';

export default function ClientSignupForm(props){

    const {values, onInputChange, onSubmit, disabled, errors} = props

    return(
        <div>
            <StyledForm >
                <StyledErrorDiv>
                    <div>{errors.userName}</div>
                    <div>{errors.password}</div>
                    <div>{errors.firstName}</div>
                    <div>{errors.lastName}</div>
                    <div>{errors.email}</div>
                    <div>{errors.roleId}</div>
                </StyledErrorDiv>
                        <StyledInnerForm  noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Username" variant="outlined" 
                            type='text'
                            id='userNameInput'
                            value={values.userName}
                            onChange={onInputChange}
                            name='userName'
                        /><br/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" 
                            type='password'
                            id='passwordInput'
                            value={values.password}
                            onChange={onInputChange}
                            name='password'
                        /><br/>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" 
                            type='text'
                            id='firstNameInput'
                            value={values.firstName}
                            onChange={onInputChange}
                            name='firstName'
                        /><br/>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" 
                            type='text'
                            id='lastNameInput'
                            value={values.lastName}
                            onChange={onInputChange}
                            name='lastName'
                        /><br/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" 
                            type='email'
                            id='emailInput'
                            value={values.email}
                            onChange={onInputChange}
                            name='email'
                        /><br/>
                        <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                            <Select 
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            // id='roleInput'
                            value={values.roleId}
                            onChange={onInputChange}
                            name='roleId'
                            label='Role'
                            >
                            <MenuItem value=''><em>-- Select a Role --</em></MenuItem>
                            <MenuItem value='Instructor'>Instructor</MenuItem>
                            <MenuItem value='Client'>Client</MenuItem>
                            </Select>
                        </FormControl>
                        </StyledInnerForm>
                        <br/>
                        <br/>
                    <Button onClick={onSubmit} variant='contained' color='primary' disabled={disabled} >Signup</Button>
            </StyledForm>
        </div>
    )
}