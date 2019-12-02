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