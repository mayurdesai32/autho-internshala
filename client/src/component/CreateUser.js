import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllUsers,
  deleteUser,
  createNewUser,
} from '../redux_store/user/UserAction';
const CreateUser = () => {
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    username: '',
    email: '',
    address: '',
  });
  const [phone, setPhone] = useState();

  const onchangePhone = (e) => {
    setPhone(parseInt(e.target.value));
    console.log(e.target.value);
  };
  const onchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(createNewUser({ ...user, phone }));
  };

  // useEffect(() => {
  //   // if (error) {
  //   //   alert(error);
  //   // }
  //   // eslint-disable-next-line
  // }, [dispatch]);

  return (
    <>
      <div className=' userauth main-containter'>
        <p className='title'>create user</p>
        <form onSubmit={submitHandler}>
          <label htmlFor='#UserName' className='label_userauth'>
            UserName
          </label>
          <br />
          <input
            type='text'
            id='UserName'
            className='input_userauth'
            name='username'
            value={user.username}
            onChange={onchange}
            required
          />
          <br />
          <label htmlFor='#mobile' className='label_userauth'>
            Mobile Number
          </label>
          <br />
          <input
            type='number'
            id='mobile'
            className='input_userauth'
            name='phone'
            value={phone}
            onChange={onchangePhone}
            required
          />
          <br />
          <label htmlFor='#email' className='label_userauth'>
            Email
          </label>
          <br />
          <input
            type='email'
            id='email'
            className='input_userauth'
            name='email'
            value={user.email}
            onChange={onchange}
            required
          />
          <br />

          <label htmlFor='#address' className='label_userauth'>
            Address
          </label>
          <br />

          <textarea
            id='address'
            className='input_userauth'
            name='address'
            value={user.address}
            onChange={onchange}
            required
          />
          <br />
          <button type='submit' className='btn_userauth'>
            Create User
          </button>
        </form>
        <div>
          <center>
            <p>{/* Create an account? <Link to='/register'>Signup</Link> */}</p>
          </center>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
