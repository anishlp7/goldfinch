import React from 'react';

import Home from './pages/home/home'
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/profile/profile';
import Header from './components/Header/header'

import { Switch, Route } from 'react-router-dom';



import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/goldfinch/" component={Home} />
      <Route path="/goldfinch/dashboard" component={Dashboard} />
      <Route path="/goldfinch/profile" component={Profile} />
    </Switch>
     
    </div>
  );
}

export default App;
