import React, { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [currentValue, setCurrentValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
  
    const handleDigitClick = (digit) => {
      if (waitingForOperand) {
        setDisplay(String(digit));
        setWaitingForOperand(false);
      } else {
        setDisplay(display === '0' ? String(digit) : display + digit);
      }
    };
  
    const handleOperatorClick = (nextOperator) => {
      const nextValue = parseFloat(display);
  
      if (currentValue === null) {
        setCurrentValue(nextValue);
      } else if (operator) {
        const result = applyOperator(operator, currentValue, nextValue);
        setCurrentValue(result);
        setDisplay(String(result));
      }
  
      setWaitingForOperand(true);
      setOperator(nextOperator);
    };
  
    const applyOperator = (operator, currentValue, nextValue) => {
      switch (operator) {
        case '+':
          return currentValue + nextValue;
        case '-':
          return currentValue - nextValue;
        case '*':
          return currentValue * nextValue;
        case '/':
          return currentValue / nextValue;
        default:
          return nextValue;
      }
    };
  
    const handleEqualClick = () => {
      const nextValue = parseFloat(display);
  
      if (operator && !waitingForOperand) {
        const result = applyOperator(operator, currentValue, nextValue);
        setCurrentValue(null);
        setOperator(null);
        setDisplay(String(result));
        setWaitingForOperand(true);
      }
    };
  
    const handleClear = () => {
      setDisplay('0');
      setCurrentValue(null);
      setOperator(null);
      setWaitingForOperand(false);
    };
  
    return (
      <div className="calculator">
        <div className="calculator-display">{display}</div>
        <div className="calculator-keypad">
          <button onClick={() => handleDigitClick(7)}>7</button>
          <button onClick={() => handleDigitClick(8)}>8</button>
          <button onClick={() => handleDigitClick(9)}>9</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
  
          <button onClick={() => handleDigitClick(4)}>4</button>
          <button onClick={() => handleDigitClick(5)}>5</button>
          <button onClick={() => handleDigitClick(6)}>6</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
  
          <button onClick={() => handleDigitClick(1)}>1</button>
         </div>
         </div>
    )
}

export default Calculator;
