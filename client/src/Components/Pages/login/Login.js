import React, { useContext } from 'react';
import './login.css';
import { StoreContext } from '../../customHooks/ContextProvider';

const Login = () => {
  const { state, dispatch } = useContext(StoreContext);

  function loginForm(e) {
    e.preventDefault();
    fetch('https://mern-jk.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: state.email,
        pass: state.pass,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          fetch('https://mern-jk.herokuapp.com/api/users/userInfo', {
            headers: {
              'x-api-key': data.token,
            },
          })
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'SET_USER', payload: data }))
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form onSubmit={loginForm} className='login'>
        <div className='login-screen'>
          <div className='app-title'>
            <h1>Login</h1>
          </div>

          <div className='login-form'>
            <div className='control-group'>
              <input
                type='email'
                className='login-field'
                onChange={(e) =>
                  dispatch({ type: 'SET_EMAIL', payload: e.target.value })
                }
                placeholder='email'
                id='login-name'
              />
              <label
                className='login-field-icon fui-user'
                htmlFor='login-name'
              ></label>
            </div>

            <div className='control-group'>
              <input
                type='password'
                className='login-field'
                onChange={(e) =>
                  dispatch({ type: 'SET_PASS', payload: e.target.value })
                }
                placeholder='password'
                id='login-pass'
              />
              <label
                className='login-field-icon fui-lock'
                htmlFor='login-pass'
              ></label>
            </div>

            <button className='btn btn-primary btn-large btn-block'>
              login
            </button>
            <a className='login-link' href='#'>
              Lost your password?
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
