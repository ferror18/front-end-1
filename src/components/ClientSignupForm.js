import React from 'react';
import {StyledForm, StyledButton, StyledErrorDiv, StyledInnerForm} from '../styles/StyledClient'

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

                    <label htmlFor='firstNameInput'>
                        First Name:
                        <input 
                            type='text'
                            id='firstNameInput'
                            value={values.firstName}
                            onChange={onInputChange}
                            name='firstName'
                        />
                    </label>

                    <label htmlFor='lastNameInput'>
                        Last Name:
                        <input 
                            type='text'
                            id='lastNameInput'
                            value={values.lastName}
                            onChange={onInputChange}
                            name='lastName'
                        />
                    </label>

                    <label htmlFor='emailInput'>
                        Email:
                        <input 
                            type='email'
                            id='emailInput'
                            value={values.email}
                            onChange={onInputChange}
                            name='email'
                        />
                    </label>

                    <label htmlFor='roleInput'>
                        Role: 
                        <select id='roleInput' onChange={onInputChange} value={values.roleId} name='roleId'>
                            <option value=''>-- Select a Role --</option>
                            <option value='Instructor'>Instructor</option>
                            <option value='Client'>Client</option>
                        </select>
                    </label>


                    <StyledButton id='signup' disabled={disabled} style={{background: "aliceblue"}}>Signup</StyledButton>
                </StyledInnerForm>
            </StyledForm>
        </div>
    )
}