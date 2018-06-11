import React, { Component } from 'react';
import '../styles/Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light sticky-top">
        <ul className="navbar-nav text-center">
          <li className="nav-item brand">
            <a href="/">Clicky Game</a>
          </li>
          <li className="nav-item">Click an image to begin</li>
          <li className="nav-item">Score: {this.props.score} | Top Score: {this.props.topScore}</li>
        </ul>
      </nav>
    )
  }
}
