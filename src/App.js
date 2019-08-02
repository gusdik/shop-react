import React from 'react';

import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HTAS PAGE</h1>
  </div> 
);

const TopicDetail = () => (
  <div>
    <h1>TOPIC DETAIL PAGE</h1>
  </div> 
);

function App() {
  return (
  <div>
    {/* <HomePage /> */}
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
      <Route path='/topics/:topicID' component={TopicDetail} />
      </Switch>
    </div>
  </div>
  );
}

export default App;
