import React from 'react';
import { auth } from '../../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import useAlert from '../../hooks/useAlert';
import './Auth.scss';
import AuthForm from './AuthForm';

export default function SignIn() {
  const { setAlert } = useAlert();
  const navigate = useNavigate();

  function doSignIn(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAlert(`You've successfully signed in as ${userCredential.user.email}!`, 'alert-success');
        navigate('/');
      })
      .catch((err) => {
        setAlert(`There was an error signing in: ${err.message}!`, 'alert-danger');
      });
  }

  return (
    <section className='auth'>
      <AuthForm formName='Sign in' onAuthFormSubmit={doSignIn}></AuthForm>
    </section>
  );
}