import React from 'react';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import useAlert from '../../hooks/useAlert';
import './Auth.scss';
import AuthForm from './AuthForm';

export default function Auth() {
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

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setAlert("You have successfully signed out!", 'alert-success');
      }).catch(function(err) {
        setAlert(`There was an error signing out: ${err.message}!`, 'alert-danger');
      });
  }

  return (
    <section className='auth'>
      <AuthForm formName='Sign up' onAuthFormSubmit={doSignUp}></AuthForm>
      <hr />
      <AuthForm formName='Sign in' onAuthFormSubmit={doSignIn}></AuthForm>
      <hr />
      <button onClick={doSignOut}>Sign out</button>
    </section>
  );
}