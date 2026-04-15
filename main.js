// variables 
// a  variable is container  to store the data 

// two kinds of data -- primitive type /user defined data 
// primitive data types -- numbers, boolean ,strings ,Symbol

// var ,let ,const --keywords used for creating variables

// var age =9; // int age =9  float percentage=9.9
// var name ="shubham" ; // anything that we put inside double quotes or single quotes  is treated as string
// var h="2";  // h is a string variable because  ,'
// h="899";
// let num=90; // assignment 
// num=98;  // re assignment
// console.log(num);

// const pi=3.14;
// //pi=7.8;  you cannot re assign the value to a const variable



// Different datatypes in javascript

let name="shubham" ; // string
let age=25; // number 
let isStudent=true; // boolean
let x=null // null datatype 
let y; // undefined   // if you donot assign anything by default to a variable it will be undefined (it will store undefined value)
console.log( typeof x);


// operators 

// Arithemetic operators 
let a=9;
let  b=7;
let sum=a+b;
console.log(a+b,a-b,a*b,a/b);
let divide=a/b;  // we get quotient
console.log(divide);
//% -->modulus operator (it gives remainder when two numbers are divided by each other)
console.log(a%b);

// comparison opertors  (= --> assignment) (== -->comparison)

let g=9; // assignment
console.log(g==a); // comparison  -->it will return the boolean value either true or false


// In js we have another comparison operator (===) 
// == always compares the value 
let a1=9; // number
let a2='9'; // string 
console.log(a1==a2);

// === it compares both data type and values 

// > --greater than
// < -- less than ,these always work with numbers
console.log("IS 8 greater thna 9",8>9) // false

// >= -->greater than or equals to
// <= --->less than and equals to

console.log(a1===a2);  // output ??

// logica operators   , && (AND), || (or operator) ,! (NOT)
// AND operator returns true if both values are true 
// if any of the value is false it will return false
console.log( true && false );


// || OR operator 
// OR operator return true if any of the value if true 
// OR operator returns false only if both value are false
console.log(false || true);


// ! Operator 

// ! it return false if applied on true 
// | it return true if appliec on false

console.log(!true);
console.log(!false);