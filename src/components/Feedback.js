import React from 'react';
import './Feedback.css';

const Feedback = ({ message, showFeedback }) => {
  return (
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
