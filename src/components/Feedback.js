import React from 'react';
import './Feedback.css';
import { WordScore } from './index';

const Feedback = ({ lastWordScore, message, showFeedback }) => {
  return (
    <div className="outer-feedback-container">
      <div
        className={
          showFeedback
            ? `${getFeedbackClass(message)}-mvmt feedback-container`
            : 'blank'
        }
      >
        <div className={`${getFeedbackClass(message)} feedback`}>{message}</div>
        <WordScore
          showWordScore={
            showFeedback && getFeedbackClass(message) !== 'incorrect'
          }
          score={lastWordScore}
        />
      </div>
    </div>
  );
};

export default Feedback;

function getFeedbackClass(message) {
  if (message === 'Nice!' || message === 'Good!') {
    return 'correct';
  }

  if (message === 'Pangram!') {
    return 'pangram';
  }
  return 'incorrect';
}
