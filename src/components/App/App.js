import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

function App(props) {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Giphy Search!</h1>
      </header>

    <Router>
      <Route path='/' exact>
        <h1>SEARCH</h1>
      </Route> 
      <Route path='/favorites' exact>
        <h1>FAVORITES</h1>
      </Route>
    </Router>


    </div>
  );
}

export default App;
