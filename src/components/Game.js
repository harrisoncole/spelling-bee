import React, { useState, Component } from 'react';
import { Hive, EntryBar, Cursor } from './index';
const letterArray = ['c', 'h', 'm', 'o', 't', 'u', 'n'];
const wordList = {
  cottonmouth: 0,
  coconut: 0,
  cocoon: 0,
  common: 0,
  conch: 0,
  concoct: 0,
  cotton: 0,
  count: 0,
  honcho: 0,
  hunch: 0,
  hunt: 0,
  mono: 0,
  month: 0,
  moon: 0,
  mount: 0,
  munch: 0,
  mutton: 0,
  noncom: 0,
  noon: 0,
  notch: 0,
  noun: 0,
  onto: 0,
  toon: 0,
  uncommon: 0,
  uncouth: 0,
  uncut: 0,
  unto: 0,
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameLetters: letterArray,
      words: wordList,
      currentWord: [],
    };

    this.addLetter = this.addLetter.bind(this);
  }

  // const Game = ({ displayInstructions }) => {
  //   const [gameLetters, setLetters] = useState(letterArray);
  //   const [words, setWords] = useState(wordList);
  //   const [currentWord, setCurrentWord] = useState([]);
  //   const props = {
  //     displayInstructions,
  //     gameLetters,
  //     words,
  //     currentWord,
  //     setCurrentWord,
  //   };

  addLetter(newLetter) {
    const letters = this.state.gameLetters;
    const word = [...this.state.currentWord];
    const letterObj = { letter: newLetter, class: 'edge' };
    if (newLetter === letters[letters.length - 1]) {
      letterObj.class = 'center';
    } else if (!letters.includes(newLetter)) {
      letterObj.class = 'non-hive';
    }
    word.push(letterObj);
    this.setState({ currentWord: word });
  }

  render() {
    const props = {
      displayInstructions: this.props.displayInstructions,
      addLetter: this.addLetter,
      gameLetters: this.state.gameLetters,
    };

    return (
      <div className="game-container">
        <div className="game-left">
          <div className="entry-container">
            <EntryBar {...props} {...this.state} />
            <Cursor {...props} />
          </div>
          <Hive {...props} />
        </div>
        <div className="game-right">Right section</div>
      </div>
    );
  }
}

export default Game;
