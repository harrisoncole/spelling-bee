import React from 'react';

const DeleteButton = ({ clearWord }) => {
  return (
    <div className="btn side" onClick={clearWord}>
      Delete
    </div>
  );
};

export default DeleteButton;
