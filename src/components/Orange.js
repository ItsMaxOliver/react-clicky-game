import React, { Component } from 'react';
import '../styles/Orange.css';

export default class Orange extends Component {
  render() {
    return (
      <img className="img-thumbnail oranges" 
        onClick={ () => this.props.clickHandler(this.props.id) }
        src = { this.props.src } 
        alt = { this.props.name } 
      />
    )
  }
}