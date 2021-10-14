import React from 'react';
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  LOGOUT,
} from './constant';

let InitailState = { user: [], loading: false };

InitailState = { loading: false };

export const userLoginReducer = (state = InitailState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };

    case LOGIN_REQUEST_SUCCESS:
      // console.log(action.payload);
      return { loading: false, success: true, loginUser: action.payload };

    case LOGIN_REQUEST_FAIL:
      return { loading: false, error: action.payload, success: false };
    case LOGOUT:
      return { loading: false, loginUser: null, success: true };

    default:
      return state;
  }
};
