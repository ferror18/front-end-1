import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {StyledForm, StyledErrorDiv, StyledHeader} from './StyledClient'
import ClientForm from './ClientForm'

export default function Client(){

    const initialFormValues = {
        name: '',
        password: ''
    }

    const initialFormErrors = {
        name: '',
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