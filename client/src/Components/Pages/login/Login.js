import React, { useContext, useEffect, useState } from 'react';
import './login.css';
import { StoreContext } from '../../customHooks/ContextProvider';

const Login = () => {
  const { state, dispatch } = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(false);
  const [register, setRegister] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch({ type: 'SET_USER', payload: foundUser });
    }
  }, []);

  async function loginForm(con = true, e) {
    if (con) {
      e.preventDefault();
    }
    const loginRes = await fetch(
      'https://mern-jk.herokuapp.com/api/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: state.users.email,
          pass: state.users.pass,
        }),
      }
    );
    const data = await loginRes.json();
    setIsLoading(true);

    if (data.token) {
      fetch('https://mern-jk.herokuapp.com/api/users/userInfo', {
        headers: {
          'x-api-key': data.token,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          localStorage.setItem(
            'user',
            JSON.stringify({ ...userData, token: data.token })
          );
          console.log(userData);
          dispatch({ type: 'SET_USER', payload: userData });
        })
        .catch((err) => {
          console.log(err);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function registerForm(e) {
    e.preventDefault();
    // console.log(e);
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: state.users.fullName,
        email: state.users.email,
        pass: state.users.pass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        loginForm(false);
      });
  }

  return (
    <>
      {!isLoading ? (
        <>
          {!register ? (
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
                        dispatch({
                          type: 'SET_USER_EMAIL',
                          payload: e.target.value,
                        })
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
                        dispatch({
                          type: 'SET_USER_PASS',
                          payload: e.target.value,
                        })
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
                  <p
                    onClick={() => setRegister(true)}
                    className='login-link'
                    style={{ cursor: 'pointer', fontSize: '18px' }}
                  >
                    register
                  </p>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={registerForm} className='login'>
              <div className='login-screen'>
                <div className='app-title'>
                  <h1>register</h1>
                </div>

                <div className='login-form'>
                  <div className='control-group'>
                    <input
                      type='text'
                      className='login-field'
                      onChange={(e) =>
                        dispatch({
                          type: 'SET_USER_FULL_NAME',
                          payload: e.target.value,
                        })
                      }
                      placeholder='full name'
                    />
                    <label
                      className='login-field-icon fui-user'
                      htmlFor='login-name'
                    ></label>
                  </div>
                  <div className='control-group'>
                    <input
                      type='email'
                      className='login-field'
                      onChange={(e) =>
                        dispatch({
                          type: 'SET_USER_EMAIL',
                          payload: e.target.value,
                        })
                      }
                      placeholder='email'
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
                        dispatch({
                          type: 'SET_USER_PASS',
                          payload: e.target.value,
                        })
                      }
                      placeholder='password'
                    />
                    <label
                      className='login-field-icon fui-lock'
                      htmlFor='login-pass'
                    ></label>
                  </div>

                  <button className='btn btn-primary btn-large btn-block'>
                    register
                  </button>
                  <p
                    style={{ cursor: 'pointer', fontSize: '16px' }}
                    onClick={() => setRegister(false)}
                    className='login-link'
                  >
                    already have an account
                  </p>
                </div>
              </div>
            </form>
          )}
        </>
      ) : (
        <img
          src='https://www.essver.co.il/wp-content/plugins/ajaxify-wordpress-site-pro/images/configPageLoader.gif'
          alt=''
        />
      )}
    </>
  );
};

export default Login;
