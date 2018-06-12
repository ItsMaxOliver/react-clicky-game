import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score : 0,
      highScore : 0,
      clicked: []
    };
  }

  setScore = id => {
    // check the clicked array to see if the newest clicked id is already there
    if ( this.state.clicked.includes(id) ) {
      this.setState({
        score : 0,
        clicked : []
      });
      // notifies the end and restart of game
      alert("Sorry, you lost. Try Again!");
    }
    else {
      // adds the new id to the clicked array
      this.setState({
        clicked : [...this.state.clicked, id]
      });
      // sets the score to the new score
      const nScore = this.state.score + 1;
      this.setState({
        score : nScore
      });

      // sets a new High Score if one is achieved
      if ( nScore >= this.state.highScore ) { 
        this.setState({
          highScore : nScore 
        });
      }
      // notifies the end of the game if all twelve are clicked with no repeats
      if ( nScore === 12 ) { 
        this.setState({
          score : 0,
          clicked : []
        });
        alert("You won! Great job!");
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header
        score = { this.state.score } 
        highScore = { this.state.highScore } 
        />
        <Main 
        setScore = { this.setScore } 
        />
      </div>
    );
  }
}