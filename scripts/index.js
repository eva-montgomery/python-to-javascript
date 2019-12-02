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