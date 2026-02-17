let name = prompt("Hi! What's your name?");
alert("Welcome " + name + "!");

const mathQuestion1 = prompt("What is 5 + 3?");
const answer1 = Number(mathQuestion1);

console.log(name + ", You answered that 5 + 4 = " + answer1);
console.log("Type of your answer is: " + typeof answer1);
console.log("Is your answer correct, " + name +"? " + "You answer is..." + (answer1 === 8));

console.log("----- Next Question -----");

const mathQuestion2 = prompt("What is 10 - 2?");
const answer2 = Number(mathQuestion2);

console.log(name + ", You answered that 10 - 2 = " + answer2);
console.log("Type of your answer is: " + typeof answer2);
console.log("Is your answer correct, " + name +"? " + "You answer is..." + (answer2 === 8));
