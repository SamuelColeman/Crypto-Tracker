import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <input className="nav-bar-search-input"></input>
        <button className="nav-bar-search-button" name="Search"></button>
      </div>
    );
  };
}

export default NavBar;