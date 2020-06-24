import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import Signup from './ClientSignupForm'
import formSchema from '../validation/clientSignupFormSchema'
import { connect } from "react-redux"
import { createUser } from "../actions";

function ClientSignup({ createUser }){
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

    // const postSignup = signUp => {
    //     axios.post('https://lambda-anywhere-fitness.herokuapp.com/api/auth/register', signUp)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             console.log(err.message)
    //         })
    //         .finally(() => {
    //             setFormValues(initialFormvalues)
                
    //         })
    // }

    const initialDisabled = true

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
        event.preventDefault()

        const newClient = {
            username: formValues.userName,
            password: formValues.password,
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            roleId: checkRoleId()
        }

        
        createUser(newClient)
    }

    const checkRoleId = () => {
        if(formValues.roleId === 'Instructor'){
            return 1
        } else {
            return 2
        }
    }

    useEffect(() => {
        if(formValues.userName !== '' && formValues.password !== '' && formValues.roleId !== ''){
            setDisabled(false)
        }
    }, [formValues])

    return (
        <div>
            <h1>Signup</h1>
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

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        roleId: state.roleId
    }
  }
  
  export default connect(mapStateToProps, { createUser })(ClientSignup)