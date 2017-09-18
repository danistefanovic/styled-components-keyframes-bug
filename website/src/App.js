import React, { Component } from 'react';
import FancyHeading from 'styled-components-keyframes-bug';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Example = styled.div`
  background-color: #ddd;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Example>
          <FancyHeading />
        </Example>
      </div>
    );
  }
}

export default App;
