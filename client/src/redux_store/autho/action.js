import React from 'react';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  LOGOUT,
} from './constant';

export const login = (userLogin) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const response = await axios.post('/autho/login', userLogin);
    dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: response.data.message });
    localStorage.setItem('user', JSON.stringify(getState().Login.loginUser));
  } catch (error) {
    const err = error.response.data.message;
    console.log('err');

    dispatch({
      type: LOGIN_REQUEST_FAIL,
      payload: err,
    });
  }
};

// for logout
export const logOut = (userid) => async (dispatch, getState) => {
  try {
    console.log(userid);
    await axios.get('/autho/logout', userid);
    // console.log('login successful' + response.data.message);

    dispatch({ type: LOGOUT });

    localStorage.removeItem('user');
    localStorage.removeItem('cartItem');
    alert('logout successfully');
  } catch (error) {
    const err = error.response.data.message;
    console.log(err);
    // dispatch({ type: USER_LOGOUT_ERR, payload: err });
  }
};
