import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import {StyledForm, StyledErrorDiv, StyledHeader} from './StyledClient'
import ClientForm from './ClientForm'
import formSchema from '../../validation/clientLoginFormSchema'

export default function Client(){

    const initialFormValues = {
        userName: '',
        password: ''
    }

    const initialFormErrors = {
        userName: '',
        password: ''
    }

    const postLogin = loginTry => {

    }

    const initialLogin = []
    const initialDisabled = true;

    const [login, changeLogin] = useState(initialLogin);
    const [formValues, setFormValues] = useState(initialFormValues)
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
                setDisabled(false)
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onSubmit = event => {

    }

    useEffect(() => {

    }, [formValues])

    return (
        <div>
            <h1>Client Login</h1>
            <ClientForm 
                values={formValues}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
                disabled={disabled}
                errors={formErrors}
            />

        </div>
    )
}