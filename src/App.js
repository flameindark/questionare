import React, { Component } from 'react';
import ajaxGet from './utils/index'
import Questionare from './Questionare'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="content-main">
        <Questionare></Questionare>
      </div>
    );
  }
}

export default App;
