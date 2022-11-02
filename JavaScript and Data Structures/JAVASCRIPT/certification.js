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
const myStr4 = "This is the start. " + "This is the end.";

//Concatenating Strings with the Plus Equals Operator
let myStr5;
myStr5 = "This is the first sentence. "
myStr5 += "This is the second sentence."

//Constructing Strings with Variables
const myName6 = "Mateus";
const myStr6 = "My name is " + myName6 + ". I am well!";

//Appending Variables to Strings
const someAdjective = "awsome";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;

//Find the length of a String
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

//Use bracket notation to find the first character in a string
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";

firstLetterOfLastName = lastName2[0];

//Understand string immutability
let myStr8 = "Jello World";
myStr8 = "Hello World";

//Use bracket notation to find the nth character in a string
const lastName3 = "Lovelace";
const thirdLetterOfLastName = lastName3[2];

//Use bracket notation to find the last character in a string
const lastName4 = "Lovelace";
const lastLetterOfLastName = lastName4[lastName4.length - 1];

//Use bracket notation to find the nth to last character in a string
const lastName5 = "Lovelace";
const secondToLastLetterOfLastName = lastName5[lastName5.length - 2];

//Word blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " !";

//Store multiple values in one variable using javascript arrays
const myArray = ["String", 1];

//Nest one array within another array
const myArray2 = [[], []];

//Access array data with indexes
const myArray3 = [50, 60, 70];
let myData = myArray[0];

//Modify array data with indexes
const myArray4 = [18, 64, 99];
myArray4[0] = 45

//Access multi dimensional arrays with indexes
const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData5 = myArray5[2][1];

//Manipulate arrays with push
const myArray6 = [["John", 23], ["cat", 2]];

myArray6.push(["dog", 3]);

//Manipulate arrays with pop
const myArray7 = [["John", 23], ["cat", 2]];
let removedFromMyArray;

removedFromMyArray = myArray7.pop();

//Manipulate arrays with shift
const myArray8 = [["John", 23], ["dog", 3]];
let removedFromMyArray1;

removedFromMyArray1 = myArray8.shift();

//Manipulate arrays with unshift
const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();

myArray9.unshift(["Paul", 35]);

//Shopping list
const myList = [["Chocolate Bar", 15], ["Chocolate Bar", 15], ["Chocolate Bar", 15], ["Chocolate Bar", 15], ["Chocolate Bar", 15], ["Chocolate Bar", 15]];

//Write reusable javascript with functions
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

//Passing values to functions with arguments
function functionWithArgs(arg1, arg2) {
  console.log(arg1 + arg2);
}

functionWithArgs(1, 2);

//Return a value from a function with return
function timesFive(arg1) {
  return arg1 * 5;
}

timesFive(5);

//Global scope and functions
let myGlobal = 10;

function fun1() {
  /*
  Variáveis que são declaradas sem a palavra-chave 
  let ou const são automaticamente criadas no escopo global
  */
  oopsGlobal = 5;

}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Local scope and functions
function myLocalScope() {
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);

//Global vs local scope in functions
const outerWear = "T-Shirt";

function myOutfit() {
  let outerWear = "sweater";
  return outerWear;
}

myOutfit();

//Understanding undefined value returned from a function
let sum1 = 0;
function addThree() {
  sum1 = sum1 + 3;
}
function addFive() {
  sum1 = sum1 + 5;
}
addThree();
addFive();

//Assignment with a returned value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

//Stand in line
function nextInLine(arr, item) {
  arr.push(item);
  item = arr.shift();
  return item;
}

const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Understanding boolean values
function welcomeToBooleans() {
  return true;
}

//Use conditional logic with if statements
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false"
}

//Comparison with the equality operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

//Comparison with the strict equality operator
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

//Practice comparing different values
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

//Comparison with the inequality operator
function testNotEqual(val) {
  if (val != 99) { // Altere esta linha
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

//Comparison with the strict inequality operator
function testStrictNotEqual(val) {
  if (val !== 17) { // Altere esta linha
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

//Comparison with the greater than operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}
testGreaterThan(10);

//Comparison with the greater than or equal to operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

//Comparison with the less than operator
function testLessThan(val) {
  if (val < 25) {  // Altere esta linha
    return "Under 25";
  }
  if (val < 55) {  // Altere esta linha
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

//Comparison with the less than or equal to operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Altere esta linha
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  // Altere esta linha
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

//Comparisons with the logical and operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

//Comparisons with the logical or operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

//Introducing else statements
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(4);

//Introducing else if statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

//Logical order in if else statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(4);

//Chaining If Else Statements
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

testSize(7);

//Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1){
  return names[0];
} else if(strokes <= par -2){
  return names[1];
} else if(strokes == par -1){
  return names[2];
} else if(strokes == par){
  return names[3];
} else if(strokes == par + 1){
  return names[4];
} else if(strokes == par + 2){
  return names[5];
} else {
  return names[6];
}
}

golfScore(5, 4);

//Selecting from Many Options with Switch Statements
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
  }
  return answer;
}

switchOfStuff(1);

//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5: 
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

sequentialSizes(1);

//Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//Returning Boolean Values from Functions
function isLess(a, b) {
  // Only change code below this line
  return a <= b;
  // Only change code above this line
}

isLess(10, 15);

