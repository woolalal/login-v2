import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Formik, Form } from 'formik';
import SingleLineTextBox from './SingleLineTextBox'
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import Axios from 'axios';
import styled from 'styled-components';

const ButtonsWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Signup = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.value);

    // console.log('user', user);
    let validate = yup.object().shape({
        firstName: yup.string()
                    .required('Required'),
        lastName: yup.string()
                    .required('Required'),
        email: yup.string()
                    .email('Not a valid email')
                    .required('Email is required'),
        password: yup.string()
                    .required('Password is required')
                    .min(8, 'Password is no less than 8 characters')
                    .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                    ),
        confirmPassword: yup.string()
                            .oneOf([yup.ref('password'), null], 'Passwords must match')
    })

    const [error, setError] = useState(null);

    return (
            <Formik
                enableReinitialize
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                // validate={(values) => {
                //     let errors = {};

                //     if(!values.firstName){
                //         errors.firstName = 'Required';
                //     }

                //     return errors;
                // }}
                validationSchema={validate}
                onSubmit={async (values, {resetForm} )=> {
                    console.log('values', values)
                    const response = await Axios.post('http://localhost:3001/api/register', {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password
                    });

                    if(response.data.token) {
                        localStorage.setItem('token', response.data.token)
                        navigate('/home')
                        resetForm();
                    }
                    else setError('Sorry, something went wrong. Please try again!')
                }}
            >
            {formik => (
                <div>
                    <h2 style={{textAlign: 'center', paddingTop: '3rem'}}>Create a new account.</h2>
                    <p style={{textAlign: 'center'}}>Think of an awesome username. Start your adventure today!</p>
                    {error && <Alert className="my-3" key="danger" variant="danger">{error}</Alert>} 
                    <Form onSubmit={formik.handleSubmit}>
                        <SingleLineTextBox 
                            type="text"
                            placeholder="First Name" 
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{width: '80%', margin: 'auto'}}
                            value={formik.values.firstName || ""}
                            errorStyle={{marginLeft: '2.5rem'}}
                            errors={(formik.errors.firstName && formik.touched.firstName && formik.errors.firstName) || ""}
                        />
                        <SingleLineTextBox 
                            placeholder="Last Name" 
                            name="lastName" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{width: '80%', margin: 'auto'}}
                            value={formik.values.lastName || ""}
                            errorStyle={{marginLeft: '2.5rem'}}
                            errors={(formik.errors.lastName && formik.touched.lastName && formik.errors.lastName) || ""}                      
                        />
                        <SingleLineTextBox 
                            placeholder="Email" 
                            name="email" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{width: '80%', margin: 'auto'}}
                            value={formik.values.email || ""}
                            errorStyle={{marginLeft: '2.5rem'}}
                            errors={(formik.errors.email && formik.touched.email && formik.errors.email) || ""}                 
                        />
                        <SingleLineTextBox 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{width: '80%', margin: 'auto'}}
                            value={formik.values.password || ""}
                            errorStyle={{marginLeft: '2.5rem'}}
                            errors={(formik.errors.password && formik.touched.password && formik.errors.password) || ""}
                        />
                        <SingleLineTextBox 
                            type="password" 
                            placeholder="Confirm Password" 
                            name="confirmPassword" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{width: '80%', margin: 'auto'}}
                            value={formik.values.confirmPassword || ''}
                            errorStyle={{marginLeft: '2.5rem'}}
                            errors={(formik.errors.confirmPassword && formik.touched.confirmPassword && formik.errors.confirmPassword) || ""}
                        />
                        <ButtonsWrap>
                        <button className="btn btn-dark mt-3">Submit</button>
                        <button type="reset" className="btn btn-danger mt-3 ms-3">Reset</button>
                        </ButtonsWrap>
                    </Form> 
                </div>
            )}
            </Formik>
    )
}

export default Signup
