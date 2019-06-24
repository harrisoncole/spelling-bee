import React, { Component } from 'react';
import { Hive, EntryBar, Cursor, WordBox, BottomButtons } from './index';
import { fischerYatesCopy } from '../utils';
const letterArray = ['n', 'h', 'm', 'o', 't', 'u', 'c'];
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
      guessedWords: [],
      currentWord: [],
      invalidLetters: false,
    };

    this.addLetter = this.addLetter.bind(this);
    this.removeLetter = this.removeLetter.bind(this);
    this.checkWord = this.checkWord.bind(this);
    this.clearWord = this.clearWord.bind(this);
    this.shuffleLetters = this.shuffleLetters.bind(this);
  }

  addLetter(newLetter) {
    const letters = this.state.gameLetters;
    const word = [...this.state.currentWord];
    const letterObj = { letter: newLetter, class: 'edge' };
    if (newLetter === letters[0]) {
      letterObj.class = 'center-letter';
    } else if (!letters.includes(newLetter)) {
      letterObj.class = 'non-letter';
      this.setState({ invalidLetters: true });
    }
    word.push(letterObj);
    this.setState({ currentWord: word });
  }

  removeLetter() {
    const word = [...this.state.currentWord];
    word.pop();
    this.setState({ currentWord: word });
  }

  includeWord(word) {
    let newWords = { ...this.state.words };
    let newGuessedWords = [...this.state.guessedWords];
    newWords[word] = 1;
    newGuessedWords.push(word);
    this.setState({ words: newWords, guessedWords: newGuessedWords });
  }

  explainer() {
    const currentWord = this.state.currentWord;
    if (currentWord.length <= 3) {
      return 'size';
    } else if (this.state.invalidLetters) {
      return 'invalid';
    } else if (!currentWord.includes(this.state.gameLetters[0])) {
      return 'non-center';
    }

    throw new Error('use of explainer with valid word');
  }
  stringifyWord() {
    const wordArray = this.state.currentWord;
    let resultWord = '';
    wordArray.forEach(word => {
      resultWord += word.letter;
    });

    return resultWord;
  }
  checkWord() {
    const currentWord = this.stringifyWord();
    setTimeout(() => this.clearWord(), 500);
    if (this.state.words[currentWord] === 0) {
      this.includeWord(currentWord);
      return 'match';
    } else if (this.state.words[currentWord]) {
      return 'seen';
    }
    return this.explainer();
  }

  clearWord() {
    this.setState({
      invalidLetters: false,
      currentWord: [],
    });
  }

  shuffleLetters() {
    const newEdges = fischerYatesCopy(this.state.gameLetters.slice(1));
    const center = this.state.gameLetters[0];
    this.setState({
      gameLetters: [center, ...newEdges],
    });
  }

  render() {
    const props = {
      displayInstructions: this.props.displayInstructions,
      addLetter: this.addLetter,
      removeLetter: this.removeLetter,
      gameLetters: this.state.gameLetters,
      checkWord: this.checkWord,
      clearWord: this.clearWord,
      shuffleLetters: this.shuffleLetters,
    };

    return (
      <div
        className={
          this.props.displayInstructions
            ? 'dim game-container'
            : 'game-container'
        }
      >
        <div className="game-left">
          <div className="entry-container">
            <EntryBar {...props} {...this.state} />
            <Cursor {...props} />
          </div>
          <Hive {...props} />
          <BottomButtons {...props} />
        </div>
        <div className="game-right">
          <WordBox words={this.state.guessedWords} />
        </div>
      </div>
    );
  }
}

export default Game;
