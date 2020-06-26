import React from 'react';
import {Motion, spring} from 'react-motion'
import {StyledForm, StyledButton, StyledInnerForm, StyledErrorDiv, StyledLoginErr} from '../styles/StyledClient'
import { TextField, Button } from '@material-ui/core';

export default function ClientForm(props){

    const {values, onInputChange, onSubmit, disabled, errors, loginErr} = props

    const checkLogInErr = () => {
        if(loginErr !== ''){
            return (
                <StyledLoginErr>
                    <p>{loginErr}</p>
                </StyledLoginErr> 
            )
        }
    }

    return (
        <div>
            <div>{checkLogInErr()}</div>
            <StyledForm onSubmit={onSubmit}>
                <StyledErrorDiv>
                    <div>{errors.userName}</div>
                    <div>{errors.password}</div>
                </StyledErrorDiv>
                <StyledInnerForm>
                    {/* <label htmlFor='userNameInput'>
                        UserName:
                        <input 
                            type='text'
                            id='userNameInput'
                            value={values.userName}
                            onChange={onInputChange}
                            name='userName'
                        />
                    </label>

                    <label htmlFor='passwordInput'>
                        Password: 
                        <input 
                            type='password'
                            id='passwordInput'
                            value={values.password}
                            onChange={onInputChange}
                            name='password'
                        />
                    </label> */}
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
                    <Button variant='contained' color='primary' onClick={onSubmit} disabled={disabled}>
                        Login
                    </Button>
                </StyledInnerForm>
            </StyledForm>
        </div>
    )
}