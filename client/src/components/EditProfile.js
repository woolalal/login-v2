import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import Axios from 'axios';
import SingleLineTextBox from './SingleLineTextBox'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { Button } from 'react-bootstrap';
import { CancelIcon, CheckIcon } from '../icons/FontAwesomeIcons';

const ButtonsWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EditProfile = () => {
    const { userDetails } = useSelector((state) => ({
        userDetails: state?.user?.value?.userDetails
    }))
    const dispatch = useDispatch();
    const [editInformation, setEditInformation] = useState(false)

    console.log('userdet', userDetails)

    return (
        <Formik
            enableReinitialize
            initialValues={{
                firstName: userDetails?.name,
                lastName: userDetails?.lname,
                email: userDetails?.email,
            }}
            onSubmit = { async (values) => {
                console.log('values', values)
                const response = await Axios.put('http://localhost:3001/api/updateprofile', {
                    id: userDetails?.userid,
                    firstName: values?.firstName,
                    lastName: values?.lastName,
                    email: values?.email
                })

                if(response?.data?.user) {
                    localStorage.setItem('token', response.data.user)
                    setEditInformation(!editInformation);
                    // dispatch(setUser({
                    // userDetails: {
                    //     id: userDetails?.userid,
                    //     name: values.firstName,
                    //     lname: values.lastName,
                    //     email: values.email
                    // },
                    //     isLoggedIn: true
                    // }))
                }
                else console.log('error')
            }}
        >
        {formik => (
            <div>
                {/* {console.log('formik1', formik)} */}
                <Form onSubmit={formik.handleSubmit}>
                    <SingleLineTextBox 
                        type="text"
                        label="First Name"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        readOnly={!editInformation ? true : false}
                        value={formik.values.firstName}
                    />
                    <SingleLineTextBox 
                        type="text"
                        label="Last Name"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        readOnly={!editInformation ? true : false}
                        value={formik.values.lastName}
                    />
                    <SingleLineTextBox 
                        type="text"
                        label="Email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        readOnly={!editInformation ? true : false}
                        value={formik.values.email}
                    />
                    <ButtonsWrap>
                        {!editInformation 
                            ? <Button variant="outline-dark" className="mt-3" onClick={() => setEditInformation(!editInformation)}>Edit Information</Button>
                            : (
                                <div>
                                    <button style={{minWidth: '80px'}}  type="submit" className="btn btn-dark mt-3">
                                        <CheckIcon />
                                    </button>
                                    <button 
                                        style={{minWidth: '80px'}} 
                                        className="btn btn-danger mt-3 ms-3" 
                                        onClick={() => {
                                            setEditInformation(!editInformation); 
                                            formik.resetForm();
                                    }}>
                                        <CancelIcon />
                                    </button>
                                </div>
                            )
                        }
                    </ButtonsWrap>
                </Form>
            </div>
        )}
        </Formik>
    )
}

export default EditProfile
