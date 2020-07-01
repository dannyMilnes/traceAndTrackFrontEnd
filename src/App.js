import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import './App.scss';
import Home from './components/pages/Home.js';
import Login from './components/pages/Login.js';
import Register from './components/pages/Register.js';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Router >
  );
}

export default App;
