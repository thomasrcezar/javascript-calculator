// src/components/Button.js
import React from 'react';

function Button({ label, onClick }) {
  return (
    <button className="btn btn-secondary" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
