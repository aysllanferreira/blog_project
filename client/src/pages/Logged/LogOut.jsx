import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function LogOut() {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      sessionStorage.removeItem('token');
      setRedirect(true);
      window.location.href = '/login';
    } else {
      setRedirect(true);
    }
  }, []);
  return (
    <div>
      {redirect ? <Redirect to="/login" /> : null}
    </div>
  );
}

export default LogOut;
