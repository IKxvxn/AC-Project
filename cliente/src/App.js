import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomeLayout from './components/home/homeLayout'
import LoginLayout from './components/login/loginLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <LoginLayout />} />
          <Route path='/inicio' render={() => <HomeLayout />} />
        </Switch>
      </div>
    );
  }
}

export default App;
