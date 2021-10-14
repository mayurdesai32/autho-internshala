import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux_store/autho/action';
import { Link, useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [user, setuser] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { email, password } = user;
  const onchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(login(user));
  };
  const { loginUser, sucess, loading, error } = useSelector(
    (state) => state.Login
  );

  useEffect(() => {
    if (loginUser) {
      history.push('/admin');
    }
    if (error) {
      alert(error);
    }
    document.title = `Login`;
    // after();
    // return () => after;
  }, [dispatch, loginUser, error]);

  return (
    <>
      <div className='userauth main-containter card'>
        <p className='userauth_title'>Login</p>
        <form>
          <label htmlFor='#email' className='label_userauth'>
            Email
          </label>
          <br />
          <input
            type='email'
            id='email'
            className='input_userauth'
            name='email'
            value={email}
            onChange={onchange}
            required
          />
          <br />

          <label htmlFor='#password' className='label_userauth' required>
            Password
          </label>
          <br />
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={onchange}
            className='input_userauth'
            required
          />

          <br />
          <button
            type='submit'
            className='btn_userauth'
            onClick={submitHandler}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
