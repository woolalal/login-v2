import React, { useState } from 'react'
import { useIdleTimer } from 'react-idle-timer';
// import { useNavigate } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const IdleTimer = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    
    const { isLoggedIn } = useSelector(state => ({
        isLoggedIn: state?.user?.value?.isLoggedIn
    }))

    const handleOnIdle = () => {
        if(isLoggedIn){
            alert('You have been inactive for too long. Please log in again.')
            // setShow(true);
            dispatch(setUser({
                userDetails: {
                    name: "",
                    email: ""
                },
                isLoggedIn: false
            }))
            localStorage.removeItem('token');
            window.location.href = '/'
        }
    }

    useIdleTimer({
        timeout: 1000 * 60 * 20,
        onIdle: handleOnIdle,
        debounce: 500
    })

    return (
        <div>
            {/* <Alert show={show} variant="danger">
                <p>Inactive. Logged out.</p>
                <hr />
                <Button onClick={() => setShow(false)}>Okay</Button>
            </Alert> */}
        </div>
    )
}

export default IdleTimer
