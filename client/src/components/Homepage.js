import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const Homepage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userDetails } = useSelector(state => ({
        userDetails: state?.user?.value?.userDetails
    }))

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = decodeToken(token)
            if(!user) {
                localStorage.removeItem('token')
                navigate('/login')
            }
            else {
                console.log('user', user)
                dispatch(setUser({
                    userDetails: {
                        name: user.name,
                        email: user.email
                    },
                    isLoggedIn: true
                }))
            }
        }
    }, [])
    
    useEffect(() => {
        console.log('user1', userDetails)
    }, [])
    return (
        <div>
            Welcome, {userDetails?.name}!
        </div>
    )
}

export default Homepage
