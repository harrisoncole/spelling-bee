import React from 'react';
import './Feedback.css';

const Feedback = ({ message, showFeedback }) => {
  return (
    <div
      className={
        showFeedback
          ? `${getFeedbackClass(message)} feedback`
          : 'blank feedback'
      }
    >
      {message}
    </div>
  );
};

export default Feedback;

function getFeedbackClass(message) {
  switch (message) {
    default:
      return 'incorrect';
  }
}
