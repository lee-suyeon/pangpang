import React from 'react';
import './App.css';
import Lotto from './lotto/Lotto';
import MainPage from './MainPage/MainPage';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/lotto" component={Lotto} />
      </Switch>
    </div>
  );
}

export default App;
