let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element from the last element
let lastIndex = ages.length - 1;
let result = ages[lastIndex] - ages[0];
console.log("Result:", result);// result 90

// Add a new age to the array
let newAge = 33;
ages.push(newAge);

// Subtract the updated first element from the updated last element
lastIndex = ages.length - 1;
result = ages[lastIndex] - ages[0];
console.log("Updated Result:", result); // result 30

// Calculate the average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let average = sum / ages.length;
console.log("Average Age:", average);


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length; // Add the length of each name to the totalLetters variable
}
let averageLetters = totalLetters / names.length;
console.log("Average letters per name:", averageLetters);

// Concatenate all names with spaces
let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i]; // Concatenate each name
  if (i !== names.length - 1) {
    concatenatedNames += " "; // Add a space except for the last name
  }
}
console.log("Concatenated names:", concatenatedNames);


// How do you access the last element of any array?
const last = array[array.length - 1];

// How do you access the first element of any array?
alert(array[0])

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
function nameLengths = ["Kelly", "Sam", "Kate"];
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length; // Add the length of each name to the totalLetters variable
}


// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
let someFunction =(Hello, n) =>{
    let result ='';
    for (let i = 0; i < n; i++) {
        result+= Hello
    }
    return result;
}
console.log(someFunction('Hello', 3))


// Write a function that takes two parameters, firstName and lastName, and returns a full name.
let createFullName = (firstName, lastName) => '${firstName} ${lastName}'
console.log(createFullName('Timothy', 'Ouma'))

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sum(a,b) {
    let sum a + b > 100;
    return true;
}

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let average = sum / ages.length;
console.log("Average Age:", average);

function willBuyDrink(isHotOutside) {
    let moneyInPocket > 10.50;
    return true;
}


// Create a function of your own that solves a problem
function myFunction(num1, num2) {
    return Math.sqrt((num1 * num1) + (num2 * num2));
}