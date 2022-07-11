import React from 'react'
import {ReactComponent as SignupSVG} from '../assets/images/guide-3.svg';
import Signup from './Signup';

const SignupForm = () => {
    return (
        <div className="mt-3">
            <div>
                <div style={{maxWidth: '360px', margin: 'auto'}}>
                    <Signup />
                </div>
                {/* <div className="col-md-6 my-auto">
                    <SignupSVG style={{height: '40vh'}}/>
                </div> */}
            </div>
        </div>
    )
}

export default SignupForm
