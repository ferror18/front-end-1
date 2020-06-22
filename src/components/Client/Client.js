import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import ClientForm from './ClientForm'
import formSchema from '../../validation/clientLoginFormSchema'

export default function Client(){

    const history = useHistory();

    const initialFormValues = {
        userName: '',
        password: ''
    }

    const initialFormErrors = {
        userName: '',
        password: ''
    }

    const postLogin = loginTry => {
        axios.post('https://lambda-anywhere-fitness.herokuapp.com/api/auth/login', loginTry)
            .then(res => {
                console.log('then')
                console.log(res.data.message)
            })
            .catch(err => {
                setError("Unfortunatelythere is no record for that username and password. You can signup or try again.")
                history.push('/client/login')
            })
            .finally( () => {
                setFormValues(initialFormValues)
            })
    }

    const initialLogin = []
    const initialError = '';
    const initialDisabled = true;

    const [login, changeLogin] = useState(initialLogin);
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    const [loginErr, setError] = useState(initialError)

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
        event.preventDefault()

        const loginAttempt = {
            username: formValues.userName.trim(),
            password: formValues.password.trim()
        }

        console.log(loginAttempt)
        postLogin(loginAttempt)
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
                loginErr={loginErr}
            />

        </div>
    )
}