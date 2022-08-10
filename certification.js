//Comment Your JavaScript Code
//This is a comment
/* This is also a comment */


//Declare JavaScript Variables
let myVar;

//Storing Values with the Assignment Operator
let a;
a = 7; 

//Assigning the Value of One Variable to Another
let a1;
a1 = 7;
let b1;
b1 = a1;

//Initializing Variables with the Assignment Operator
let a2 = 9;

//Declare String Variables
let myFirstName = 'Mateus';
let myLastName = 'Barbosa';

//Understanding Uninitialized Variables
let a3 = 5;
let b3 = 10;
let c3 = 'I am a';

a3 = a3 + 1;
b3 = b3 + 5;
c3 = c3 + " String!";

//Understanding Case Sensitivity in Variables
let studlyCapVar;
let properCamelCase;
let titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

//Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp";  //Const variables are all upper case
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 

//Add Two Numbers with JavaScript
const sum = 10 + 10;

//Subtract One Number from Another with JavaScript
const difference = 45 - 33;

//Multiply Two Numbers with JavaScript
const product = 8 * 10;

//Divide One Number by Another with JavaScript
const quotient = 66 / 33;

//Increment a Number with JavaScript
let myVar2 = 87;

myVar2++;

//Decrement a Number with JavaScript
let myVar3 = 11;

myVar3--;

//Create Decimal Numbers with JavaScript
const myDecimal = 5.7;

//Multiply Two Decimals with JavaScript
const product2 = 2.0 * 2.5;

//Divide One Decimal by Another with JavaScript
const quotient2 = 4.4 / 2.0;

//Finding a Remainder in JavaScript
const remainder = 11 % 3;

//Compound Assignment With Augmented Addition
let a4 = 3;
let b4 = 17;
let c4 = 12;

a4 += 12;
b4 += 9;
c4 += 7;

//Compound Assignment With Augmented Subtraction
let a5 = 11;
let b5 = 9;
let c5 = 3;

// Only change code below this line
a5 -= 6;
b5 -= 15;
c5 -= 1;

//Compound Assignment With Augmented Multiplication
let a6 = 5;
let b6 = 12;
let c6 = 4.6;

// Only change code below this line
a6 *= 5;
b6 *= 3;
c6 *= 10;

//Compound Assignment With Augmented Division
let a7 = 48;
let b7 = 108;
let c7 = 33;

// Only change code below this line
a7 /= 12;
b7 /= 4;
c7 /= 11;

//Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Quoting Strings with Single Quotes
/* 
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
*/
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape Sequences in Strings

/**
    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \r	carriage return
    \t	tab
    \b	word boundary
    \f	form feed
 */
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";

//Concatenating Strings with Plus Operator