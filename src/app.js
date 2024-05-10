import React, { useState } from 'react';
import './index';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === '=') {
      // When '=' is pressed, calculate the result
      try {
        const evalResult = eval(input);
        const resultString = String(evalResult);
        setResult(resultString);
      } catch (error) {
        setResult('Error');
      }
    } else if (buttonValue === 'C') {
      // Clear the input and result
      setInput('');
      setResult('');
    } else {
      // Update the input with the button value
      setInput((prevInput) => prevInput + buttonValue);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="calculator-body">
              <Display value={result || input || "0"} />
              <ButtonPanel handleButtonClick={handleButtonClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
