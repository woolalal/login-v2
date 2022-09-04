import React, { useState, useRef, useEffect } from 'react'
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import Axios from 'axios';
import SingleLineTextBox from './SingleLineTextBox'
import * as yup from "yup";
import { Button, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const ButtonsWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ChangePassword = ({tab}) => {

    const { userDetails } = useSelector((state) => ({
        userDetails: state?.user?.value?.userDetails
    }))
    const [errorMessage, setErrorMessage] = useState('')
    const [showError, setShowError] = useState(false)
    const formikRef = useRef();

    useEffect(() => {
        if(tab === 'changePassword') formikRef.current?.resetForm();
    }, [tab])
    let validate = yup.object().shape({
        oldPassword: yup.string()
                    .required('Required'),
        newPassword: yup.string()
        .required('Password is required')
        .min(8, 'Password is no less than 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                    ),
        confirmNewPassword: yup.string()
                            .required('Required')
                            .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    })
    console.log('error', errorMessage);
    return (
        <Formik
            innerRef={formikRef}
            enableReinitialize
            initialValues={{
                oldPassword: '',
                newPassword: '',
                confirmNewPassword: ''
            }}
            validationSchema={validate}
            onSubmit = { async (values) => {
                console.log('val', userDetails)
                const response = await Axios.put('http://localhost:3001/api/changepassword', {
                    id: userDetails?.userid,
                    email: userDetails?.email,
                    oldPassword: values?.oldPassword,
                    newPassword: values?.newPassword,
                }).catch(err => {
                    console.log('error', err.response)
                    setErrorMessage(err.response.data.status);
                    setShowError(!showError)
                })

                if(response?.data?.user) {
                    setErrorMessage('')
                    setShowError(!showError);
                }
            }}
        >
        {formik => (
            <div className="mt-5">
                <Form onSubmit={formik.handleSubmit}>
                    {console.log('formik', formik)}
                    <SingleLineTextBox 
                        type="password"
                        label="Old Password"
                        name="oldPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.oldPassword}
                        errors={(formik.errors.oldPassword && formik.touched.oldPassword && formik.errors.oldPassword) || ""}
                    />
                    <SingleLineTextBox 
                        type="password"
                        label="New Password"
                        name="newPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.newPassword}
                        errors={(formik.errors.newPassword && formik.touched.newPassword && formik.errors.newPassword) || ""}
                    />
                    <SingleLineTextBox 
                        type="password"
                        label="Confirm New Password"
                        name="confirmNewPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmNewPassword}
                        errors={(formik.errors.confirmNewPassword && formik.touched.confirmNewPassword && formik.errors.confirmNewPassword) || ""}
                    />
                    {showError && <Alert className='mt-4' key='danger' variant='danger'>{errorMessage}</Alert>}
                    <ButtonsWrap>
                        <Button 
                            type="submit" 
                            variant="outline-dark"
                        >
                            Save
                        </Button>
                    </ButtonsWrap>
                </Form>
            </div>
        )}
        </Formik>
    )
}

export default ChangePassword
