export {};
let car = "civic";
let number = 7;
let cars = ["honda","civic","corolla"];

//Tests for equality and inequality with strings

console.log("Is car != 'mehran'?I predict true.");
console.log(car != "mehran");

console.log("Is car == 'civic'?I predict true.");
console.log(car == "civic");

console.log("Is car != 'civic'?I predict false.");
console.log(car != "civic");

console.log("Is car == 'Civic'?I predict false.");
console.log(car == "Civic");

// Tests using the lower case function

console.log("Is 'mango' lowercase? I predict true.");
console.log("mango".toLowerCase() == "mango");

console.log("Is 'CAR' lowercase? I predict false.");
console.log("CAR".toLowerCase() == "CAR");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.

console.log("Is number == 7?I predict true.");
console.log(number == 7);

console.log("Is number != 7?I predict false.");
console.log(number != 7);

console.log("Is number > 55?I predict false.");
console.log(number > 55);

console.log("Is number >= 7?I predict true.");
console.log(number >= 7);

console.log("Is number < 55?I predict true.");
console.log(number < 55);

console.log("Is number <= 5?I predict false.");
console.log(number <= 5);

// Tests using "and" and "or" operators

console.log("Is car equal to 'civic' and number equal to 7? I predict true.");
console.log(car == "civic" && number == 7);

console.log("Is car equal to 'Civic' and number equal to 7? I predict false.");
console.log(car == "Civic" && number == 7);

console.log("Is car equal to 'civic' or number equal to 8? I predict true.");
console.log(car == "civic" || number == 8);

console.log("Is car equal to 'Civic' or number equal to 8? I predict false.");
console.log(car == "Civic" || number == 8);

//Test whether an item is in a array

console.log("Is 'honda' is in the cars array? I predict true.");
console.log(cars.includes("honda"));

console.log("Is 'suzuki' is in the cars array? I predict false.");
console.log(cars.includes("suzuki"));

// Test whether an item is not in a array

console.log("Is 'honda' is not in the cars array? I predict false.");
console.log(!cars.includes("honda"));

console.log("Is 'suzuki' is not in the cars array? I predict true.");
console.log(!cars.includes("suzuki"));