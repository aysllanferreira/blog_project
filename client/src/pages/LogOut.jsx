import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function LogOut() {
  const history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      sessionStorage.removeItem('token');
      history.push('/login');
    } else {
      history.push('/login');
    }
  }, []);
  return (
    <div />
  );
}

export default LogOut;
