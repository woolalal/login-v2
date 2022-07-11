import React from 'react'

const SingleLineTextBox = ({label, errors, errorStyle, ...props}) => {
    return (
        <div className='mt-3'>
            <label>{label}</label>
            <input 
                className={`form-control shadow-none ${errors ? 'is-invalid' : ''}`}
                autoComplete="off"
                {...props}
            />
            {errors && (<span style={errorStyle} className="help is-danger">{errors}</span>)}
        </div>
    )
}

export default SingleLineTextBox
