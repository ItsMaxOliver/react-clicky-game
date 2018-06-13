import React, { Component } from 'react';
import '../styles/Orange.css';

export default class Orange extends Component { 
  render() {
    return (
      <img className="oranges"
        id = { this.props.id }
        onClick={ () => this.props.clickHandler(this.props.id) }
        src = { this.props.src } 
        alt = { this.props.name } 
      />
    )
  }
}