import React from 'react';
import logo from './logo.svg';
import './App.css';

import pigIt from './pigIt/pigIt';
import calc from './calc/calc';
import anagrams from './anagram/anagram';

function AppTitle(title) { return title; }

function App() {
let productTitle = AppTitle("Products");

let pigIt1 = pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
let pigIt2 = pigIt('Hello world !');     // elloHay orldway !

let func1 = calc(7, 5, 'times'); // 35
let func2 = calc(4, 9, 'plus'); // 13
let func3 = calc(8, 3, 'minus'); // 5
let func4 = calc(6, 2, 'dividedBy'); // 3

let anagram1 = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']); // ['aabb', 'bbaa']
let anagram2 =  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']); // ['carer', 'racer']
let anagram3 = anagrams('laser', ['lazing', 'lazy',  'lacer']); // []

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{productTitle}</h1>
          <p>{func1}</p>
          <p>{func2}</p>
          <p>{func3}</p>
          <p>{func4}</p>
        </header>
      </div>
    );
  }
export default App;
