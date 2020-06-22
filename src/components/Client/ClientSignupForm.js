import React from 'react';
import {StyledForm, StyledButton, StyledErrorDiv, StyledInnerForm} from '../../styles/StyledClient'

export default function ClientSignupForm(props){

    const {values, onInputChange, onSubmit, disabled, errors} = props

    return(
        <div>
            <StyledForm onSubmit={onSubmit}>
                <StyledErrorDiv>
                    <div>{errors.userName}</div>
                    <div>{errors.password}</div>
                    <div>{errors.firstName}</div>
                    <div>{errors.lastName}</div>
                    <div>{errors.email}</div>
                    <div>{errors.roleId}</div>
                </StyledErrorDiv>
                <StyledInnerForm>
                    <label htmlFor='userNameInput'>
                        Username: 
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
                    </label>

                    
                    <StyledButton id='signup' disabled={disabled} style={{background: "aliceblue"}}>Signup</StyledButton>
                </StyledInnerForm>
            </StyledForm>
        </div>
    )
}