import * as yup from 'yup'

const RegistrationSchema = yup.object().shape({
    "name": yup.string().required("Name is Required"),
    "username": yup.string().required("Username is Required"),
    "password": yup.string().required("Password is Required"),
    "email": yup.string().required("Email is Required"),
    "address": yup.string().required("Address is Required"),
})

export default RegistrationSchema;
