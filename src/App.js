import React, { Component } from 'react';
import Display from './components/Display';
import Content from './components/Content';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Display />
        <Content />
        <Navigation />
      </div>
    );
  }
}

export default App;
