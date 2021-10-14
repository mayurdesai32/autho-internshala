import React from 'react';
import loading from './assert/loading.gif';
const Loading = () => {
  return (
    <div className='loading'>
      <img src={loading} style={{ margin: 'auto' }} alt='loading' />
    </div>
  );
};

export default Loading;
