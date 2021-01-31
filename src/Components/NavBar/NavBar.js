import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <input className="nav-bar-search-input" placeholder="Search"></input>
      </div>
    );
  };
}

export default NavBar;