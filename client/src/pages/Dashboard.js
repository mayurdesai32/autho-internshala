import React, { useState, useEffect } from 'react';
import ListUser from '../component/ListUser';
import CreateUser from '../component/CreateUser';

import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../redux_store/autho/action';
import { Link, useHistory } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loginUser } = useSelector((state) => state.Login);

  const [tab, setTab] = useState(true);
  useEffect(() => {
    if (!loginUser) {
      history.push('/');
    }

    document.title = `Dashboard`;
    // eslint-disable-next-line
  }, [dispatch, loginUser]);

  return (
    <>
      <div className='title'>Admin panel</div>
      <div className='container'>
        <div className='small-nav'>
          <div className='tab' onClick={() => setTab(true)}>
            userlist
          </div>
          <div className='tab' onClick={() => setTab(false)}>
            create user
          </div>
        </div>
        <div>{tab ? <ListUser /> : <CreateUser />}</div>
        {/* <div className='title'>create user</div> */}

        {/* */}
      </div>
    </>
  );
};

export default Dashboard;
