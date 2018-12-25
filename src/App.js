import React, { Component } from 'react';
import Router from './router'
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
