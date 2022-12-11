import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { privateRoute } from './api';
import {
  Home, Login, Register, Welcome, NotFound,
  LogOut, MyProfile, EditProfile,
} from './pages';
import Navbar from './components/navbar/Navbar';

function App() {
  const [redirect, setRedirect] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      // check if token is valid
      privateRoute()
        .then((res) => {
          if (res.status === 200) {
            setRedirect(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setRedirect(true);
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('user');
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
        {!redirect && (
          <div>
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/myprofile" component={MyProfile} />
            <Route exact path="/editprofile" component={EditProfile} />
          </div>
        )}
        <Route exact path="/logout" component={LogOut} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
