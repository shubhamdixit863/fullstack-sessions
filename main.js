// variables 
// a  variable is container  to store the data 

// two kinds of data -- primitive type /user defined data 
// primitive data types -- numbers, boolean ,strings ,Symbol

// var ,let ,const --keywords used for creating variables

// // var age =9; // int age =9  float percentage=9.9
// // var name ="shubham" ; // anything that we put inside double quotes or single quotes  is treated as string
// // var h="2";  // h is a string variable because  ,'
// // h="899";
// // let num=90; // assignment 
// // num=98;  // re assignment
// // console.log(num);

// // const pi=3.14;
// // //pi=7.8;  you cannot re assign the value to a const variable



// // Different datatypes in javascript

// let name="shubham" ; // string
// let age=25; // number 
// let isStudent=true; // boolean
// let x=null // null datatype 
// let y; // undefined   // if you donot assign anything by default to a variable it will be undefined (it will store undefined value)
// console.log( typeof x);


// // operators 

// // Arithemetic operators 
// let a=9;
// let  b=7;
// let sum=a+b;
// console.log(a+b,a-b,a*b,a/b);
// let divide=a/b;  // we get quotient
// console.log(divide);
// //% -->modulus operator (it gives remainder when two numbers are divided by each other)
// console.log(a%b);

// // comparison opertors  (= --> assignment) (== -->comparison)

// let g=9; // assignment
// console.log(g==a); // comparison  -->it will return the boolean value either true or false


// // In js we have another comparison operator (===) 
// // == always compares the value 
// let a1=9; // number
// let a2='9'; // string 
// console.log(a1==a2);

// // === it compares both data type and values 

// // > --greater than
// // < -- less than ,these always work with numbers
// console.log("IS 8 greater thna 9",8>9) // false

// // >= -->greater than or equals to
// // <= --->less than and equals to

// console.log(a1===a2);  // output ??

// // logica operators   , && (AND), || (or operator) ,! (NOT)
// // AND operator returns true if both values are true 
// // if any of the value is false it will return false
// console.log( true && false );


// // || OR operator 
// // OR operator return true if any of the value if true 
// // OR operator returns false only if both value are false
// console.log(false || true);


// // ! Operator 

// // ! it return false if applied on true 
// // | it return true if appliec on false

// console.log(!true);
// console.log(!false);
// console.log( 5 >3 && 10 <20); // what will be the output ?  true 

let num=10;
console.log(num %2);  // 0 

console.log("10"+5+5+8+9) ;// this chiranjeevi-  105 // almas --15
console.log(10+"5");    // whener it sees string it does string append 

console.log("10"-5); // ????

console.log(9+10+"5");    // the evaluation happens from left to right so thats why it first adds the number then concatanate into string

console.log("hello"-5); // output ? NaN





//. -----> function ---> is a piece of code which you can use for repetitive logic 

let c=9; // sum of thir squares
let z=90;

let v=89;
let j=87;

let vb=c*c + z*z;
let gh=v*v + j*j;

console.log(vb,gh)


// function definition
function SumOfSquares(a1,a2){ // a1 and a2 are called as parameters
    let sqsum=a1*a1+a2*a2;
    return  sqsum

}

// function call
let ty=SumOfSquares(8,9) // 8 and 9 are arguments
console.log("TY",ty);
SumOfSquares(8,90)
SumOfSquares(89,9)
SumOfSquares(18,19)