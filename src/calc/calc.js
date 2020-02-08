import React from 'react';

function calc(num, operand, operator) {
    if (isNaN(num) || isNaN(operand)) {
      alert("Not a number");
    } else {
        const numbers = [
            function zero() { return 0; },
            function one() { return 1; },
            function two() { return 2; },
            function three() { return 3; },
            function four() { return 4; },
            function five() { return 5; },
            function six() { return 6; },
            function seven() { return 7; },
            function eight() { return 8; },
            function nine() { return 9; }
        ]
        let firstOperand = numbers[num];
        let secondOperand = numbers[operand];

        const plus = () => { return firstOperand + secondOperand; }
        const minus = () => { return firstOperand - secondOperand; }
        const times = () => { return firstOperand * secondOperand; }
        const dividedBy = () => { return firstOperand / secondOperand; }
    
        switch(operator) {
            case 'plus': 
        return plus;
            case 'minus':
        return minus;
            case 'times':
        return times;
            case 'dividedBy':
        return dividedBy;
        }
    }
}

export default calc;

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript