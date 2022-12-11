import React, { useEffect, useState, createContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { privateRoute, fetchUserById } from './api';
import {
  Home, Login, Register, Welcome, NotFound,
  LogOut, MyProfile, EditProfile,
} from './pages';
import Navbar from './components/navbar/Navbar';

function App() {
  const [redirect, setRedirect] = useState(true);
  const [user, setUser] = useState({});

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
        });
    } else {
      setRedirect(true);
    }
  }, []);

  useEffect(() => {
    fetchUserById()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const UserContext = createContext(user);

  return (
    <div>
      <UserContext.Provider value={user}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {!redirect && (
          <div>
            <Route exact path="/welcome" component={Welcome} />
            <Route
              exact
              path="/myprofile"
              render={() => (
                <MyProfile getUser={UserContext} />)}
            />
            <Route
              exact
              path="/editprofile"
              render={() => (
                <EditProfile getUser={UserContext} />)}
            />
          </div>
          )}
          <Route exact path="/logout" component={LogOut} />
          <Route component={NotFound} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
