import React from 'react';
import Navbar from '../Navbar';

const Main = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Main;