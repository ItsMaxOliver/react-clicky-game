import React, { Component } from 'react';
import '../styles/Navbar.css';

export default class Navbar extends Component { 
  render() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light sticky-top">
            <div className="nav-item brand col-4">
              <a href="/">Clicky Game</a>
            </div>
            <div className="nav-item col-4">Click an image to begin!</div>
            <div className="nav-item col-4">Current Score: { this.props.score } | High Score: { this.props.highScore } </div>
        </nav>
    )
  }
}