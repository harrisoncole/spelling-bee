import React, { useState } from 'react';
import { Hive, EntryBar } from './index';
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

const Game = ({ displayInstructions }) => {
  const [letters, setLetters] = useState(letterArray);
  const [words, setWords] = useState(wordList);
  const props = {
    displayInstructions,
    letters,
    words,
  };
  return (
    <div>
      <div>
        <EntryBar {...props} />
        <Hive {...props} />
      </div>
    </div>
  );
};

export default Game;
