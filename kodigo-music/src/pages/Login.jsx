import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import '../styles.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { setIsAuthenticated, setError } = useOutletContext();
  const [isRegistering, setIsRegistering] = useState(false);

  const onSubmit = async (data) => {
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        setIsAuthenticated(true);
        setError(null);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
        setIsAuthenticated(true);
        setError(null);
      }
      navigate('/songs');
    } catch (error) {
      setError('Incorrect credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <input {...register('email', { required: true })} placeholder="Email" className="input-field" />
      {errors.email && <span className="error-message">This field is required</span>}
      <input {...register('password', { required: true })} type="password" placeholder="Password" className="input-field" />
      {errors.password && <span className="error-message">This field is required</span>}
      <input type="submit" value={isRegistering ? "Register" : "Login"} className="submit-button" />
      <button type="button" onClick={() => setIsRegistering(!isRegistering)} className="toggle-button">
        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
    </form>
  );
};

export default Login;