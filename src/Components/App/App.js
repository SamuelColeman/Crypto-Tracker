import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import CoinCards from '../CoinCards/CoinCards';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Header />
          <NavBar />
          <CoinCards />
      </div>
    );
  };
}

export default App;