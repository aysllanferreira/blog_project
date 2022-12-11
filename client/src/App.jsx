import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { privateRoute } from './api';
import {
  Home, Login, Register, Welcome, NotFound,
  LogOut,
} from './pages';
import Navbar from './components/navbar/Navbar';

function App() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      // check if token is valid
      privateRoute()
        .then((response) => {
          if (response.status === 200) {
            console.log('Welcome');
          }
        })
        .catch((error) => {
          console.log(error);
          setRedirect(true);
          sessionStorage.removeItem('token');
        });
    } else {
      setRedirect(true);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {!redirect ? (
          <Route exact path="/welcome" component={Welcome} />
        ) : (
          <Route exact path="/welcome" component={Login} />
        )}
        <Route exact path="/logout" component={LogOut} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
