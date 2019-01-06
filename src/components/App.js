import React, { Component } from 'react';
import apiKey from './config';
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {
  render() {

    const key = apiKey;

    return (
      <div className="container">
          <Header />
          <Gallery />
      </div>
    );
  }
}

export default App;