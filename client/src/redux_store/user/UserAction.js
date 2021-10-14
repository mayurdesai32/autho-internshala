import React from 'react';
import axios from 'axios';
import {
  Create_USER_REQUEST,
  Create_USER_SUCCESS,
  Create_USER_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_REQUEST_SUCCESS,
  GET_ALL_USERS_REQUEST_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_REQUEST_SUCCESS,
  DELETE_USER_REQUEST_FAIL,
} from './userConstant';

export const createNewUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: Create_USER_REQUEST });
    await axios.post('/user/create', user);
    console.log('register successful');
    alert('User Added Successfully');
    dispatch({ type: Create_USER_SUCCESS });
  } catch (error) {
    const err = error.response.data.message;
    console.log(err);
    alert(err);
    dispatch({ type: Create_USER_FAIL, payload: err });
  }
};

// UPDATE PASSWORD

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_USERS_REQUEST });
    const response = await axios.get(`/user/read`);
    dispatch({
      type: GET_ALL_USERS_REQUEST_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    const err = error.response.data.message;
    dispatch({ type: GET_ALL_USERS_REQUEST_FAIL, payload: err });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });
    console.log(id);

    const response = await axios.delete(`/user/delete/${id}`);
    alert('userdeleted');
    dispatch({
      type: DELETE_USER_REQUEST_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    const err = error.response.data.message;
    alert(err);
    dispatch({ type: DELETE_USER_REQUEST_FAIL, payload: err });
  }
};
