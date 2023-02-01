import React from 'react';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import useAlert from '../../useAlert';
import './SignIn.css';

function SignIn() {
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
    <section className='signIn'>
      <h1>Sign up</h1>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={doSignUp}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name="email" className="form-control" autoFocus="autoFocus" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" name="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary">Sign up</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn