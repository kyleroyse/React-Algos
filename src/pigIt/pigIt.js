import React from 'react';

function pigIt(str){

    let pigLatin = [];
    let words = str.split(' ');
  
    words.forEach(word);
  
    function word(word, index) {
      word = word.split('');
  
      let bang = false;
      let questi = false;
  
      if (word[0] === '!') {
        bang = true;
        word.pop();
      }
      if (word[0] === '?') {
        questi = true;
        word.pop();
      }
  
      let letter = word.splice(0, 1, word[0]);
      word.shift();
      word.push(letter + 'ay');
      word.join('');
      word = word.join('');
  
      if (index >= 1) {
          word = ' ' + word;
      }
      if (word !== 'ay') {
      pigLatin.push(word);
    }
  
      if (bang) {
        pigLatin.push('!');
      }
     if (questi) {
        pigLatin.push('?');
      }
    }
      pigLatin.join('');
      pigLatin = pigLatin.join('');
      
    console.log(pigLatin);
    return pigLatin;  
    }


export default pigIt

// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript