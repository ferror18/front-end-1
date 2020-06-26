import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import * as Yup from 'yup'
import ClientForm from './ClientForm'
import formSchema from '../validation/clientLoginFormSchema'
import { connect } from "react-redux"
import { loginUser } from "../actions";

function Client({loginUser, id}){

    const history = useHistory();

    const initialFormValues = {
        userName: '',
        password: ''
    }

    const initialFormErrors = {
        userName: '',
        password: ''
    }

    const initialError = '';
    const initialDisabled = true;

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

        // console.log(loginAttempt)
        loginUser(loginAttempt)
        setFormValues(initialFormValues)
    }

    useEffect(() => {
        if(formValues.userName !== '' && formValues.password !== ''){
            setDisabled(false)
        }
    }, [formValues])
    useEffect(()=>{
        console.log(id, localStorage.getItem("token"), '<----THIS ARE THE CLIENT UE---->');
        if(localStorage.getItem('token') !== null){
            history.push("/dashboard")
        }
    }, [id])
    return (
        <div>
            <h1>Login</h1>
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

const mapStateToProps = (state) => {
    return {
        userName: state.username,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        roleId: state.roleId,
        id: state.id
    }
  }
  
  export default connect(mapStateToProps, { loginUser })(Client)