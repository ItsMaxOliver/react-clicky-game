import React, { Component } from 'react';
import '../styles/Navbar.css';

export default class Navbar extends Component { 
  render() {
    return (
      <nav className="navbar">
        <div className="nav-item">
          <a href="/">
          Clicky Game
          </a>
        </div>
        <div className="nav-item"></div>
        <div className="nav-item">
          Current Score: { this.props.score } | 
          High Score: { this.props.highScore } 
        </div>
      </nav>
    )
  }
}