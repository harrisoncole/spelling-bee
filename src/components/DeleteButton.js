import React from 'react';

const DeleteButton = ({ removeLetter }) => {
  return (
    <div className="btn side" onClick={removeLetter}>
      Delete
    </div>
  );
};

export default DeleteButton;
