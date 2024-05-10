import React from 'react';

// Button component receiving props for label, onClick handler, and id
const Button = ({ label, onClick, id }) => {
  return (
    <button className="btn btn-secondary" id={id} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
