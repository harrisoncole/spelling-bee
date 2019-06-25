import React from 'react';

const DeleteButton = ({ deletePressed, removeLetter }) => {
  return (
    <div
      className={deletePressed ? 'btn side pressed' : 'btn side'}
      onClick={removeLetter}
    >
      Delete
    </div>
  );
};

export default DeleteButton;
