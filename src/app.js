import React, { useState } from 'react';
import './index';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import { evaluate } from 'mathjs';

const App = () => {
    const [input, setInput] = useState('');
    const [lastEvaluated, setLastEvaluated] = useState(false);

    const handleButtonClick = (buttonValue) => {
        if (buttonValue === 'C') {
            setInput('');
            setLastEvaluated(false);
        } else if (buttonValue === '=') {
            try {
                const result = evaluate(input).toString();
                setInput(result);
                setLastEvaluated(true);
            } catch (error) {
                setInput('Error');
                setLastEvaluated(false);
            }
        } else if (buttonValue.match(/[0-9]/)) {
            if (lastEvaluated) {
                setInput(buttonValue);
                setLastEvaluated(false);
            } else {
                setInput(prev => prev === '0' && buttonValue === '0' ? '0' : (prev === '0' ? buttonValue : prev + buttonValue));
            }
        } else if (buttonValue === '.') {
            if (!lastEvaluated && !input.split(/[\+\-\*\/]+/).pop().includes('.')) {
                setInput(input + '.');
            }
        } else if (['+', '-', '*', '/'].includes(buttonValue)) {
            if (lastEvaluated) {
                setInput(input + buttonValue);
                setLastEvaluated(false);
            } else {
                setInput(prev => {
                    // Check if the last character is an operator
                    if (/[+\-*/]$/.test(prev)) {
                        // If the last character is an operator and the current button is '-', append it
                        if (buttonValue === '-' && !/[+\-*/]-$/.test(prev)) {
                            return prev + buttonValue;
                        }
                        // If the last character is an operator and the current button is not '-', replace the operator
                        return prev.replace(/[+\-*/]-?$|[+\-*/]+$/, '') + buttonValue;
                    }
                    // If the last character is not an operator, just append the button value
                    return prev + buttonValue;
                });
            }
        }
    }
    return (
        <div className="App">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="calculator-body">
                            <Display value={input || "0"} />
                            <ButtonPanel handleButtonClick={handleButtonClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
