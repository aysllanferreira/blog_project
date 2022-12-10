import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home, Login, Register, Welcome, NotFound,
} from './pages';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/welcome" component={Welcome} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
