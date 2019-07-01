import React from 'react';
import './Feedback.css';
import { WordScore } from './index';

const Feedback = ({ message, showFeedback }) => {
  return (
    <div className="outer-feedback-container">
      <div className="feedback-container">
        <div
          className={
            showFeedback
              ? `${getFeedbackClass(message)} feedback`
              : 'blank feedback'
          }
        >
          {message}
        </div>
      </div>
      <WordScore
        showWordScore={showFeedback && message === 'Nice!'}
        score="5"
      />
    </div>
  );
};

export default Feedback;

function getFeedbackClass(message) {
  switch (message) {
    case 'Nice!':
      return 'correct';
    default:
      return 'incorrect';
  }
}
