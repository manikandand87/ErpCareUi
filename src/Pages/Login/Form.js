import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoginForm, setisLoginForm] = useState(true);

  function submitForm() {
    setIsSubmitted(true);
  }

  function changeForm() {
    setisLoginForm(!isLoginForm);
    console.log(isLoginForm);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>

        {/* {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )} */}
        {
          isLoginForm ?
            <FormLogin submitForm={submitForm} changeForm={changeForm} />
            :
            <FormSignup submitForm={submitForm} changeForm={changeForm} />
        }
      </div>
    </>
  );
};

export default Form;