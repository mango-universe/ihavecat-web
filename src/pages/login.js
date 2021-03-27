import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './../css/login.css';

const Login = () => {
  const { register, handleSubmit, errors, setError } = useForm({
    mode: 'onBlur'
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <section className="login-section">
      <div className="login-form">
        <form>
          <h1 className="login-form__title">LOGIN</h1>

          <input type="email" 
                name="email" 
                placeholder="Email"
                ref={
                  register({
                    required: {
                      value: true,
                      message: "이메일을 입력 해주세요"
                    }
                  })
                } onChange={e => setLoginEmail(e.target.value)} /><br />
          <p className="login-error-msg">
                     {errors.email && errors.email.message}
          </p><br />
          <input type="password" 
                  name="password" 
                  placeholder="Password"
                  ref={
                    register({
                      required: {
                        value: true,
                        message: "패스워드를 입력 해주세요"
                      }
                    })
                  } onChange={e => setLoginPassword(e.target.value)} /><br />
          <p className="login-error-msg">
                     {errors.password && errors.password.message}
          </p><br />

          <button type="submit" className="login-form__loginBtn">LOGIN</button>
          <button type="button" className="login-form__signupBtn">
            <Link to="/signup">SIGNUP</Link>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login;