import React, { Component } from 'react';
import '../styles/Orange.css';

export default class Orange extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="btn" onClick={() => this.props.handleClick(this.props.id)}>
        <img className="img-thumbnail oranges" 
          src={this.props.src} 
          alt={this.props.name} 
        />
      </button>
    )
  }
}
