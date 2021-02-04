import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <p className="nav-bar-label">Top 100 Crypto Currencies</p>
        <input className="nav-bar-search-input" placeholder="Search"></input>
      </div>
    );
  };
}

export default NavBar;