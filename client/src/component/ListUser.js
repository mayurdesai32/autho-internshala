import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllUsers,
  deleteUser,
  createNewUser,
} from '../redux_store/user/UserAction';
import Loading from './Loading';

const ListUser = () => {
  let { users, loading, error } = useSelector((state) => state.allUser);
  const { isdeleted, deleteerror } = useSelector((state) => state.deleteUser);

  const dispatch = useDispatch();

  const removeHandler = (_id) => {
    dispatch(deleteUser(_id));
    dispatch(getAllUsers());
  };

  useEffect(() => {
    // if (error) {
    //   alert(error);
    // }
    dispatch(getAllUsers());
    // eslint-disable-next-line
  }, [dispatch, isdeleted]);

  return (
    <>
      <div className='main-containter'>
        <div className='title'>User List</div>
        <div className='list header'>
          <div className=' username'>UserName</div>
          <div className=' mobile'>Mobile Number</div>
          <div className=' email'>Email</div>
          <div className=' address'>Address</div>
          <div className=' remove'>Remove</div>
        </div>
        {/* answer */}
        {loading ? (
          <Loading />
        ) : error ? (
          <>{error}</>
        ) : (
          users.map((ele, i) => (
            <div className='list' key={ele._id}>
              <div className='username'>
                <span className='item-title'>UserName:</span>
                {ele.username}
              </div>
              <div className='mobile'>
                <span className='item-title'>Mobile Number:</span> 9819344370@
                {ele.phone}
              </div>
              <div className='email'>
                <span className='item-title'>Email:</span>
                {ele.email}
              </div>
              <div className='address'>
                <span className='item-title'>Address:</span>
                {ele.address}
              </div>
              <div className='remove'>
                <span className='item-title'>Deleted User :</span>
                <i
                  className='fas fa-trash-alt'
                  onClick={() => removeHandler(ele._id)}
                ></i>
              </div>
            </div>
          ))
        )}
        {/* end of answer */}
      </div>
    </>
  );
};

export default ListUser;
