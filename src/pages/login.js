import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './../css/login.css';

const Login = () => {
  const { register, handleSubmit, errors, setError } = useForm({
    mode: 'onBlur'
  });

  return (
    <section className="login-section">
      <div className="login-form">
        <form>
          <h1 className="login-form__title">LOGIN</h1>

          <input type="email" name="email" placeholder="Email" /><br />
          <p className="signup-error-msg">
                     {errors.email && errors.email.message}
          </p><br />
          <input type="password" name="password" placeholder="Password" /><br />
          <p className="signup-error-msg">
                     {errors.password && errors.password.message}
          </p><br />

          <button className="login-form__loginBtn">LOGIN</button>
          <button className="login-form__signupBtn">
            <Link to="/signup">SIGNUP</Link>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login;