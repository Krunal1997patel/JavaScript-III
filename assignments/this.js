/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding is the default for "this" if "this" is set to nothing. It will display the whole JS object 
 * 2. Implicit Binding is when "this" is use inside the Object and it can refence it back in that Object.
 * 3. New Binding is when make a function constructor and setting "this" to the parametrs for each iteams, and using the "new" keyword on that function constructor and setting the parametra as object.
 * 4. Explicit Binding is when making a function and Object separately and using .call() or .apply() to refence 'this' in function from the Object.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
'use strict';
console.log(this);

// Principle 2

// code example for Implicit Binding
const game = {
    name: 'God Of War',
    year: 2017,
    type: 'Action and Adventure',
    favGame: function () {
        console.log(`My favorite game is ${this.name} and it was released in ${this.year} and it's a ${this.type} game.`);
    }
}

game.favGame();


// Principle 3

// code example for New Binding

function GameInfo(att) {
    this.name = att.name,
        this.year = att.year,
        this.type = att.type
}

let mario = new GameInfo({
    name: 'Mario',
    year: 1990,
    type: 'Action'
});

console.log(mario.year);
console.log(mario.name);
console.log(mario.type);


// Principle 4

// code example for Explicit Binding

function parent() {
    console.log(`My parent name is ${this.name}`);
}

let myParent = {
    name: '007',
    age: 'classified'
}

parent.call(myParent);

let parentInfo = parent.bind(myParent);

// console.log(parentInfo());