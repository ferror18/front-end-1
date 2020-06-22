import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import Signup from './ClientSignupForm'
import formSchema from '../../validation/clientSignupFormSchema'

export default function ClientSignup(){
    const history = useHistory(); 

    const initialFormvalues = {
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        roleId: ''
    }

    const initialFormErrors = {
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        roleId: ''
    }

    const postSignup = signUp => {

    }

    const initialSignup = []
    const initialDisabled = true

    const [signup, changeSignup] = useState(initialSignup)
    const [formValues, setFormValues] = useState(initialFormvalues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const onInputChange = event => {
        const {name, value} = event.target

        Yup
            .reach(formSchema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: ''
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })

        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const onSubmit = event => {

    }

    return (
        <div>
            <h2>Client Signup</h2>
            <Signup 
                values={formValues}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
                disabled={disabled}
                errors={formErrors}
            />
        </div>
    )
}