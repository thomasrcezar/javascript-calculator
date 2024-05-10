import React from 'react';
import Button from './Button';

function ButtonPanel({ handleButtonClick }) {
  const createDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(<Button key={i} label={String(i)} onClick={() => handleButtonClick(String(i))} />);
    }
    return digits;
  };

  return (
    <div>
      <div className="button-row">
        {createDigits()}
        <Button label="+" onClick={() => handleButtonClick('+')} />
        <Button label="-" onClick={() => handleButtonClick('-')} />
        <Button label="*" onClick={() => handleButtonClick('*')} />
        <Button label="/" onClick={() => handleButtonClick('/')} />
        <Button label="=" onClick={() => handleButtonClick('=')} />
        <Button label="C" onClick={() => handleButtonClick('C')} />
        <Button label="." onClick={() => handleButtonClick('.')} />
      </div>
    </div>
  );
}

export default ButtonPanel;
