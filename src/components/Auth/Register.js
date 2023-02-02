import React from 'react';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import useAlert from '../../hooks/useAlert';
import './Auth.scss';
import AuthForm from './AuthForm';

export default function Register() {
  const { setAlert } = useAlert();
  const navigate = useNavigate();

  function doSignUp(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAlert(`You've successfully signed up, ${userCredential.user.email}!`, 'alert-success');
        navigate('/');
      })
      .catch((err) => {
        setAlert(`There was an error signing up: ${err.message}`, 'alert-danger');
      });
  }

  return (
    <section className='auth'>
      <AuthForm formName='Sign up' onAuthFormSubmit={doSignUp}></AuthForm>
    </section>
  );
}