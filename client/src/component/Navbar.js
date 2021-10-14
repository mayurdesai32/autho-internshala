import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux_store/autho/action';
const Navbar = () => {
  const dispatch = useDispatch();
  const { loginUser, sucess, loading, error } = useSelector(
    (state) => state.Login
  );
  const logout = () => {
    console.log('logout');
    dispatch(logOut(loginUser._id));
  };

  useEffect(() => {
    // if (!loginUser) {
    // }
  }, [dispatch]);

  return (
    <>
      <div className='navbar'>
        <div className=' navbar-top'>
          <div className='nav-left'>Navbar</div>
          <div className='nav-right'>
            <div className='nav-link'>Home</div>
            <div className='nav-link'>
              {loginUser ? (
                <button onClick={logout}>logout</button>
              ) : (
                <Link to='/'> sigin</Link>
              )}
            </div>
            <a href='http://'></a>
            {/* <div className='nav-link'></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
