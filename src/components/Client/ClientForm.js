import React from 'react';
import {StyledForm, StyledButton, StyledInnerForm, StyledErrorDiv} from './StyledClient'

export default function ClientForm(props){

    const {values, onInputChange, onSubmit, disabled, errors} = props

    return (
        <StyledForm>
            <StyledErrorDiv>
                <div>{errors.userName}</div>
                <div>{errors.password}</div>
            </StyledErrorDiv>
            <StyledInnerForm>
                <label htmlFor='userNameInput'>
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
                        type='text'
                        id='passwordInput'
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                    />
                </label>
                <StyledButton onSubmit={onSubmit} disabled={disabled} style={{background: "aliceblue"}}>
                    Login
                </StyledButton>
            </StyledInnerForm>
        </StyledForm>
    )
}