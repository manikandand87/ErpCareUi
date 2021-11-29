import React from 'react'
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { LoginModel } from '../../DataModel/LoginModel';

const FormLogin = ({ submitForm,changeForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate,
        LoginModel
    );

    return (
        <div className='form-content-right'>
            <h1>ECARE SYSTEM</h1>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>Login</h1>
                <div className='form-inputs'>
                    <label className='form-label'>Username</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign In
                </button>
                <span className='form-input-login'>
                    <a href='#' onClick={changeForm}>Sign up</a> for new user
                </span>
            </form>
        </div>
    )
}

export default FormLogin
