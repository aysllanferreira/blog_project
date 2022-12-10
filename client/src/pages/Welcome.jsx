import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { privateRoute } from '../api';

function Welcome() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      privateRoute()
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setRedirect(true);
    }
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      {redirect && <Redirect to="/login" />}
    </div>
  );
}

export default Welcome;
