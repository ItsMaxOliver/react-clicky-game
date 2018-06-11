import React, { Component } from 'react';
import '../styles/Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container header text-center">
          <h1 className="display-4">Clicky Game!</h1>
          <h2 className="lead">Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
      </div>
    )
  }
}
