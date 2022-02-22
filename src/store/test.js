// import { word } from 'random-words';
const word = require('random-words');

const arrayRandomWords = amount => {
    const res = [];
    for (let i = 0; i < amount; i++) {
        res.push(word({ min: 3, max: 10, join: ' ' }));
    }
    return res;
};

console.log(arrayRandomWords(10));
console.log(word({ min: 3, max: 10, join: ' ' }));
