import React from 'react'
import {ReactComponent as SignupSVG} from '../assets/images/guide-3.svg';
import Login from './Login';

const LoginForm = () => {
    return (
        <div className="mt-3">
            <div>
                <div style={{maxWidth: '360px', margin: 'auto'}}>
                    <Login />
                </div>
                {/* <div className="col-md-6 my-auto">
                    <SignupSVG style={{height: '40vh'}}/>
                </div> */}
            </div>
        </div>
    )
}

export default LoginForm
