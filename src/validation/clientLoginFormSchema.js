import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    userName: Yup
        .string()
        .min(5, 'Username must be at least 5 characters long')
        .required('Username is required'),
    password: Yup
        .string()
        .min(7, 'Password must be at least 7 characters long')
        .required('Password is required')
});

export default formSchema;