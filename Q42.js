"use strict";
// 41. Great Magicians: Start with a copy of your Exercise 39. Write a function called make_great() that modifies the array 
// of magicians by adding the phrase the Great to each magician's name. Call show_magicians() to see that the list has
// actually been modified.
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) { //i stands for index string
        magicians[i] = magicians[i] + ' the great';
    }
}
const magicians2 = ["jack", "alonso", "lau"];
makeGreat(magicians2);
showMagicians(magicians2);
