import React, { Component } from 'react';
import Orange from './Orange';

const src = "./orange.png";

let orangesArr = [
  {
    id: 1,
    src: src,
    name: "Orange1"
  },
  {
    id: 2,
    src: src,
    name: "Orange2"
  },
  {
    id: 3,
    src: src,
    name: "Orange3"
  },
  {
    id: 4,
    src: src,
    name: "Orange4"
  },
  {
    id: 5,
    src: src,
    name: "Orange5"
  },
  {
    id: 6,
    src: src,
    name: "Orange6"
  },
  {
    id: 7,
    src: src,
    name: "Orange7"
  },
  {
    id: 8,
    src: src,
    name: "Orange8"
  },
  {
    id: 9,
    src: src,
    name: "Orange9"
  },
  {
    id: 10,
    src: src,
    name: "Orange10"
  },
  {
    id: 11,
    src: src,
    name: "Orange11"
  },
  {
    id: 12,
    src: src,
    name: "Orange12"
  }
];

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastClicked: false
    };
  }

  shuffleOranges = (arr) => {
    for (let i = (arr.length - 1); i > 0; i--) {
      const k = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[k]] = [arr[k], arr[i]];
    }
  };

  clickHandler = (id) => {
    this.props.setScore(id);
    this.setState({
      lastClicked: id
    });
    this.shuffleOranges(orangesArr); 
  }

  render() {
    return (
      <div className="main">
        {orangesArr.map(image => 
          <Orange 
            src = { image.src }
            alt = { image.name }
            id = { image.name }
            key = { image.id.toString() }
            clickHandler = { this.clickHandler }
          />)}
      </div>
    );
  }
}
