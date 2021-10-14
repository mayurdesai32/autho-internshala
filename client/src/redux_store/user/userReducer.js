import React from 'react';
import {
  Create_USER_REQUEST,
  Create_USER_SUCCESS,
  Create_USER_FAIL,
  // UPDATE_PASSWORD_REQUEST,
  // UPDATE_PASSWORD_REQUEST_SUCCESS,
  // UPDATE_PASSWORD_REQUEST_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_REQUEST_SUCCESS,
  GET_ALL_USERS_REQUEST_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_REQUEST_SUCCESS,
  DELETE_USER_REQUEST_FAIL,
} from './userConstant';

let InitailState = { user: [], loading: false };

export const userCreateReducer = (state = InitailState, action) => {
  switch (action.type) {
    case Create_USER_REQUEST:
      return { ...state, loading: true };

    case Create_USER_SUCCESS:
      return { loading: false, success: true };
    case Create_USER_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
InitailState = { loading: false };

export const getAllUsersReducer = (
  state = { users: [], loading: false, error: '' },
  action
) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_USERS_REQUEST_SUCCESS:
      return {
        loading: false,
        success: true,
        users: action.payload,
        error: null,
      };

    case GET_ALL_USERS_REQUEST_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return { ...state, loading: true };

    case DELETE_USER_REQUEST_SUCCESS:
      return { loading: false, success: true, userdeleted: action.payload };

    case DELETE_USER_REQUEST_FAIL:
      return { loading: false, isdeleted: action.payload, success: false };

    default:
      return state;
  }
};
