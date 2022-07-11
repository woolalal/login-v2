import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import SingleLineTextBox from './SingleLineTextBox'
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
import styled from 'styled-components';
import Axios from 'axios';
import { Alert } from 'react-bootstrap';

const ButtonsWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    let validate = yup.object().shape({
        email: yup.string()
                    .email('Not a valid email')
                    .required('Email is required'),
        password: yup.string()
                    .required('Password is required')
    })

    const [error, setError] = useState(null);

    return (
            <Formik
                enableReinitialize
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validate}
                onSubmit={async (values, {resetForm} )=> {
                    console.log('values', values)
                    const response = await Axios.post('http://localhost:3001/api/login', {
                        email: values.email,
                        password: values.password
                    });

                    if(response.data.user) {
                        localStorage.setItem('token', response.data.user)
                        // navigate('/home');
                        resetForm();
                        setError(null);
                        window.location.href = '/home'
                    }
                    else setError('Incorrect username/password entered.')
                }}
            >
            {formik => (
                <div>
                    <h2 style={{textAlign: 'center', paddingTop: '3rem'}}>Login</h2>
                    {error && <Alert className="my-3" key="danger" variant="danger">{error}</Alert>} 
                    <Form onSubmit={formik.handleSubmit}>
                        <SingleLineTextBox 
                            placeholder="Email"
                            name="email" 
                            onChange={formik.handleChange}
                            onKeyPress={() => setError(null)}
                            onBlur={formik.handleBlur}
                            style={{width: '80%', margin: 'auto'}}
                            errorStyle={{marginLeft: '2.5rem'}}
                            value={formik.values.email || ""}
                            errors={(formik.errors.email && formik.touched.email && formik.errors.email) || ""}                 
                        />
                        <SingleLineTextBox 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            onChange={formik.handleChange}
                            onKeyPress={() => setError(null)}
                            onBlur={formik.handleBlur}
                            style={{width: '80%', margin: 'auto'}}
                            errorStyle={{marginLeft: '2.5rem'}}
                            value={formik.values.password || ""}
                            errors={(formik.errors.password && formik.touched.password && formik.errors.password) || ""}
                        />
                        <ButtonsWrap>
                            <button type="submit" className="btn btn-dark mt-3">Submit</button>
                            <button type="reset" onClick={() => setError(null)} className="btn btn-danger mt-3 ms-3">Reset</button>
                        </ButtonsWrap>
                    </Form>
                </div>
            )}
            </Formik>
    )
}

export default Login
