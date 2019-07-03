import React, { Component } from 'react';
import {
  Hive,
  EntryBar,
  Cursor,
  WordBox,
  BottomButtons,
  Feedback,
  TotalScore,
} from './index';
import {
  swapClassNames,
  getPoints,
  fischerYatesCopy,
  getUniqueLetters,
} from '../utils';
const letterArray = ['n', 'h', 'm', 'o', 't', 'u', 'c'];
const wordList = {
  cottonmouth: 0,
  coconut: 0,
  cunt: 0,
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
      answers: wordList,
      guessedWords: [],
      currentWord: [],
      invalidLetters: false,
      feedback: 'test',
      showFeedback: false,
      points: 0,
      lastWordScore: 0,
      maxPoints: 0,
      rank: 'Beginner',
    };

    this.addLetter = this.addLetter.bind(this);
    this.removeLetter = this.removeLetter.bind(this);
    this.checkWord = this.checkWord.bind(this);
    this.clearWord = this.clearWord.bind(this);
    this.shuffleLetters = this.shuffleLetters.bind(this);
    this.setFeedback = this.setFeedback.bind(this);
  }

  componentDidMount() {
    console.log(this.setMaxPoints());
  }

  componentWillUnmount() {
    // document.removeEventListener('keydown', this.keyDownHandler);
  }

  setMaxPoints() {
    let maxPoints = this.calculateMaxPoints();
    this.setState({ maxPoints });
    return maxPoints;
  }

  calculateMaxPoints() {
    let max = 0;
    for (let key in this.state.answers) {
      if (this.state.answers.hasOwnProperty(key)) {
        max += getPoints(key);
      }
    }
    return max;
  }

  addLetter(newLetter) {
    const word = [...this.state.currentWord];
    const letterObj = this.createLetterObject(newLetter);
    word.push(letterObj);
    this.setState({ currentWord: word });
  }

  createLetterObject(letter) {
    const letters = this.state.gameLetters;
    const letterObj = { letter: letter, class: 'edge' };
    if (letter === letters[0]) {
      letterObj.class = 'center-letter';
    } else if (!letters.includes(letter)) {
      letterObj.class = 'non-letter';
      this.setState({ invalidLetters: true });
    }
    return letterObj;
  }

  stringifyWord() {
    const wordArray = this.state.currentWord;
    let resultWord = '';
    wordArray.forEach(word => {
      resultWord += word.letter;
    });
    return resultWord;
  }

  removeLetter() {
    const word = [...this.state.currentWord];
    word.pop();
    this.setState({ currentWord: word });
  }

  checkWord() {
    const currentWord = this.stringifyWord();
    setTimeout(() => this.clearWord(), 1000);
    if (this.state.answers[currentWord] === 0) {
      let positiveFeedback = this.getPositiveFeedback();
      this.establishCorrectWord();
      return positiveFeedback;
    } else if (this.state.answers[currentWord]) {
      return 'Already found';
    }
    return this.getNegativeFeedback();
  }

  clearWord() {
    this.setState({
      invalidLetters: false,
      currentWord: [],
    });
  }

  establishCorrectWord() {
    this.markWordAsGuessed();
    this.incrementPoints();
    this.setRank();
    this.clearWord();
  }

  markWordAsGuessed() {
    let currentWord = this.stringifyWord();
    let answerList = { ...this.state.answers };
    let guessedWords = [...this.state.guessedWords];
    answerList[currentWord] = 1;
    guessedWords.push(currentWord);
    this.setState({ answers: answerList, guessedWords: guessedWords });
  }

  incrementPoints() {
    const currentWordScore = getPoints(this.stringifyWord());
    this.setState({
      lastWordScore: currentWordScore,
      points: this.state.points + currentWordScore,
    });
  }

  getNegativeFeedback() {
    const currentWord = this.stringifyWord();
    if (currentWord.length <= 3) {
      return 'Too short';
    } else if (this.state.invalidLetters) {
      return 'Bad letters';
    } else if (!currentWord.includes(this.state.gameLetters[0])) {
      return 'Missing center letter';
    } else {
      return 'Not in word list';
    }
  }

  getPositiveFeedback() {
    let currentWord = this.stringifyWord();
    let currentPoints = getPoints(currentWord);
    if (currentPoints === 4) return 'Good!';
    if (getUniqueLetters(currentWord).length === 7) return 'Pangram!';
    return 'Nice!';
  }

  setRank() {
    this.setState({ rank: this.determineRank() });
  }

  determineRank() {
    let pointPercentage = this.state.points / this.state.maxPoints;
    if (pointPercentage > 0.7) return 'Genius';
    if (pointPercentage > 0.6) return 'Amazing';
    if (pointPercentage > 0.5) return 'Great';
    if (pointPercentage > 0.3) return 'Nice';
    if (pointPercentage > 0.2) return 'Solid';
    if (pointPercentage > 0.1) return 'Good';
    if (pointPercentage > 0.05) return 'Moving up';
    if (pointPercentage > 0) return 'Good start';
  }

  setFeedback(message, showBool) {
    this.setState({
      feedback: message,
      showFeedback: showBool,
    });
  }

  shuffleLetters() {
    const newEdges = fischerYatesCopy(this.state.gameLetters.slice(1));
    const center = this.state.gameLetters[0];
    swapClassNames('edge-letter', 'hidden');

    setTimeout(() => {
      this.setState({
        gameLetters: [center, ...newEdges],
      });
      swapClassNames('hidden', 'edge-letter');
    }, 500);
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
      setFeedback: this.setFeedback,
      score: this.state.points,
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
          <Feedback
            message={this.state.feedback}
            showFeedback={this.state.showFeedback}
            lastWordScore={this.state.lastWordScore}
          />
          <div className="entry-container">
            <EntryBar {...props} {...this.state} />
            <Cursor {...props} />
          </div>
          <Hive {...props} />
          <BottomButtons {...props} />
        </div>
        <div className="game-right">
          <div className="score-container">
            <div>{this.state.rank}</div>
            <div>
              <TotalScore score={this.state.points} />
            </div>
          </div>
          <WordBox words={this.state.guessedWords} />
        </div>
      </div>
    );
  }
}

export default Game;
