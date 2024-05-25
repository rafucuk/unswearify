# unswearify

![Image](https://img.shields.io/npm/v/unswearify?color=%252351F9C0&label=unswearify) 
![Image](https://img.shields.io/npm/dt/unswearify.svg?color=%2351FC0&maxAge=3600) 

#
[![NPM](https://nodei.co/npm/unswearify.png?compact=true)](https://nodei.co/npm/unswearify/)

## Installation
```npm
npm install unswearify
```

## Usage

```javascript
const unswearify = require('unswearify');

unswearify.loadProfanities('tr_TR'); // Loading profanity data
unswearify.loadProfanitiesFromFile('/path/to/profanity/array.json'); // Loading profanity data
unswearify.addProfanity("badword") // Add badword to the list

//////////////////

unswearify.isProfanity('badword', 0.9); // Check if word is listed as badword and set custom threshold (optional default is 0.7)
// true

unswearify.getScore('badword'); // Returns calculated similarity of the word
// between 0 to 1

unswearify.findProfanities('This is a badword!'); // Returns array of profanities in a sentence
// [ { word: 'f*ck', score: 0.7416666666666667 } ]

```