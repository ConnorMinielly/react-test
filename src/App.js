import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './Footer';
import './App.css';

class App extends Component {
  state = {
    didClick: false,
  };

  onFooterClick = event => {
    this.setState({ didClick: true });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.didClick === false ? (
            <h1 className="App-title">Welcome to React</h1>
          ) : (
            <h1 className="App-title">Goodbye!!!!</h1>
          )}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer text="Hello!" onFooterClick={this.onFooterClick} />
      </div>
    );
  }
}

export default App;
