// This is a comment
// This is another comment
/* What?
It looks lilke a CSS comment
*/



// variables! (storning single pieces of into)
// turkeyLegsConsumed = 3
var turkeyLegsConsumed = 3;

// 1. Prefix your variables the first time you use them.
// 2. Use camelCase!
// 3. Terminate each line with ';'

//'var' was the original way to declare
// 1. It gives you more control.(You can limit its use to a specific if/else or a specific loop.


let turkeysCooked = 2; 


// 'contst" is like let, but:
// - You must assign it when you declare it.
// - You can never reassign it.

const numberOfTurkeysICanEat = 1;

// How to use these keywords:
// 1. Create your variables using 'const'
// 2. If you find out that you need to reassign it, change it to 'let'.

// print("Hello World!")
console.log("Hello World!");
console.log(`Hello World!`)
console.log(`Hello World! ${turkeyLegsConsumed}`)

// print(turkeysCooked)
console.log(turkeysCooked);

//print(f"I ate {turkeysCooked} turkeys!")
console.log(`I ate ${turkeysCooked} turkeys!`);

// You can use backtick-strings for interpolation
// - Template Strings
// - Template Literals

// print(f"How many turkeys I should eat {numberOfTurkeysICanEat - turkeysCooked}")
console.log(`Turkeys to eat: ${numberOfTurkeysICanEat - turkeysCooked}`);
// Inside of `${}, you can put any valid JavaScript expression.

// debugger;
let petName = `Oakley`;
// petName.toUpperCase();
// When do I do upper-casing in HTML vs. CSS vs. JavaScript?
// - WHereaver you have control.
// - If it won't change for a long time: HTML
// - If you can't change the HTML: CSS
// - If you get the data froma  server: JavaScipt
console.log(`${petName.toUpperCase()} is ${petName.length} characters long.`);
// .toUpperCase is a method (i.e., a function that belongs to an object)
// .length is a property (i.e., a variable that belongs to an object)

const aboutMyPet = `${petName.toUpperCase()} is ${petName.length} characters long.`;
console.log(aboutMyPet);

console.log(aboutMyPet);
petName = "Millllllllllllla";

// Stuff we'll do with collections:
// Create
const turkeyDinner = ["sausage balls", "turkey", "dressing", "pecan pie"];
// How do I copy a list?

// Retrieve
// print(turkeyDinner[2])
console.log(turkeyDinner[2]);
// How do I retrtieve a portion? ("slice" in python)
// How do I retrieve based on condition?
// How do I transform each item an put that into a new list?


// Update
// turkeyDinner[1] = "Tofurkey"
turkeyDinner[1] = "Tofurkey";

// Delete
// in python:
// turkeyDinner.pop(1)
// del turkeyDinner[1]
// ....
// You can do this in JavaScript:
// delete turkeyDinner[1];
// But! This leaves a hole!!!
// instead, you can splice
turkeyDinner.splice(1,1);


// in python, we write a for-loop:
// for item in turkeyDinner:
//      print(f"For Turkey Day, I ate {item}")

// In Javascript:
// 1. "classic" for-loop (is the equivalent of the python while loop)
// BTW, the equivalent of count += 1 is count++
for (let count = 0; count < turkeyDinner.length; count++) {
    //console.log(count);
    console.log(`I ate ${turkeyDinner[count]}`);
}

// console.log(`I ate ${turkeyDinner[0]}`)
// console.log(`I ate ${turkeyDinner[1]}`)
// console.log(`I ate ${turkeyDinner[2]}`)
// console.log(`I ate ${turkeyDinner[3]}`)

// 2. "new fangled" for-of-loop
let itemCount = 0; // If you *really* need the index...
for (let item of turkeyDinner) {
    console.log(`I ate ${item}`);
    turkeyDinner[itemCount] = "PIE";
    itemCount++;
    // same as itemCount += 1
}

// 3. (for tomorrow) .forEach and friends

// Converting Numbers to/from Strings
// a_num = "5"
// no_really_number = int(num)
const aNum = "5";
// const reallyANumber = Number(aNum);
const reallyANumber = parseInt(aNum, 10);
// Passing parseInt a dicimal number results in the decimal portion being throwna away:
// parseInt("3.14", 10) --> 3

const reallyAFloat = parseFloat("3.14");

// the_original_number = str(no_really_a_number)
const theStringFive = String(reallyANumber);
const theString314 = String(reallyAFloat);

// Comparison

// In python, this is false:
// "5" == 5

// In JavaScript, the == operator 
// AUTOMATICALLY converts types.

// In JavaScript, use the "threequal" ===
"5" === 5
// `===` is the strict equality operator
// it does a double comparison.
// 1. It compares the types
// 2. then. it compares the values


// These are the same in python and in JavaScript
5 < 6 // true
6 < 6 // false
6 <= 6 // true
7 > 6 // true
7 > 7 // false
7 >= 7 // true

// the following is not a thing in JavaScript:
// "7" >== 7
// you get an error!‚

// and/or equivalents
const petAge = 9;

//python
// petAge < 10 and petAge > 5

// JavaScript
petAge < 10 && petAge > 5;

// python's or
// petAge < 10 or petAge > 5

// Javascript
petAge < 10 || petAge > 5

// too much
petAge < 10 && petAge > 5 || petAge === 8;
const isYoungEnough = petAge < 10;
const isOldEnough = petAge > 5;
const isJustRight = petAge === 8;

isYoungEnough && isOldEnough || isJustRight;

// if () {}

// if/else
if (isYoungEnough && isOldEnough) {
    if (isJustRight) {
        console.log(`You are exactly the right age.`)
         } else {
            console.log(`You're cool anyway.`)
}
}

// if (isYoungEnough && isOldEnough) {
//     if (isJustRight) {
//         console.log(`You are exactly the right age.`)
//     } else if(isMoreJustRight) {
//         console.log(`Wow. That's the best`)
//          } else {
//             console.log(`You're cool anyway.`)
// }
// }

// 1. Create an array of numbers
// 2. Loop through the array.
// 3. Print out only the even numbers.

// in python:
// num = 8123456
// num % 2 == 0

// in JavaScript:
// const num = 8123456
// (num % 2) === 0;

const someNumbers = [25, 3, 8, 54, 8, 2, 5, 7, 12, 66];
// for () {}
// the `in` keyword would give you the indexes-
// for other kinds of collections, the `in` keyword can give you "metadata"
for (let number of someNumbers) {
    if (number % 2 === 0) {
        console.log(`Here is a number: ${number}`);
        // console.log(number);
    }
}

// I want the even numbers in their own array.
// - Where are the numbers now? In an array
// - Where do I want to put them in? A new array
const evensOnly = [];
// How do I put them in the new array?

for (let number of someNumbers) {
    if (number % 2 === 0) {
        // in python, it's evensOnly.append(number)
        evensOnly.push(number);
    }
}
console.log(evensOnly);

// JavaScript doesn't care if you mix and match.
// But, there's not a good use for a mixed up array.
const aBunchOfStuff = ["a", 1, "hello", 300];
for (let thing of aBunchOfStuff) {
    console.log(thing);
}

// Maybe
// Dictionaries