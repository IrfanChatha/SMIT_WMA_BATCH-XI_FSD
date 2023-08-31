/*1- Declare a variable called myVar and assign it the value of 5. 
Then, using the console.log function, print the value of myVar to the console.*/

let myVar = 5;
console.log(myVar);


/*2- Declare a variable called myString and assign it the value of "Hello, world!".
Then, using the alert function, display the value of myString in an alert box.*/

let myString = "Hello, world!";
alert(myString);


/*3- Declare two variables called num1 and num2, and assign them the values of 5 and 10, respectively.
Using the prompt function, ask the user to enter a number, and store the result in a variable called userNum.
Then, using the console.log function, print the sum of num1, num2, and userNum to the console.*/

let num1 = 5;
let num2 = 10;
let userNum = prompt("Enter a number:");
let sum = num1 + num2 + Number(userNum);
console.log(sum);


/*4- Declare a variable called myBoolean and assign it the value of true.
Using an if statement, check if myBoolean is true, and if so, use the console.log function
to print "It's true!" to the console. Otherwise, print "It's false!" to the console.*/

let myBoolean = true;
if (myBoolean) {
console.log("It's true!");
} else {
console.log("It's false!");
}


/*5- Use an if/else statement to check if a number is even or odd. If the number is even, log "even" to
the console. If the number is odd, log "odd" to the console.*/

let number = 7;
if (number % 2 === 0) {
console.log("even");
} else {
console.log("odd");
}


/*6- Use the + operator to concatenate two strings together. Then, log the result to the console.*/

let str1 = "Hello ";
let str2 = "World";
console.log(str1 + str2);


/*7- Use the * operator to multiply two numbers together. Then, log the result to the console.*/

let mulNum1 = 3;
let mulNum2 = 4;
console.log(mulNum1*mulNum2);


/*8- Write a program that takes a string from the user using prompt and checks if it's equal
to "password". If it is, display an alert saying "Access granted", otherwise display an alert
saying "Access denied".*/

let userPassword = prompt ("Please enter password: ");

if (userPassword === "password") {
  alert ("Access granted..");
} else {
alert ("Access denied..");
}


/*9- Write a program that takes three numbers as input and returns the largest of those three numbers.*/

let numInput1 = prompt ("Enter first number : ");
let numInput2 = prompt ("Enter second number : ");
let numInput3 = prompt ("Enter third number : ");

if (numInput1 > numInput2 && numInput1 > numInput3) {
  alert(numInput1 + ". First number is greater");
} else if (numInput2 > numInput1 && numInput2 > numInput3) {
  alert(numInput2 + ". Second number is greater");
} else {
  alert(numInput3 + ". Third number is greater");
}


/*10 -Write a program that takes two strings from the user using prompt and checks if they are equal.
If they are, display an alert saying "The strings are equal", otherwise display an alert saying
"The strings are not equal".*/

let strInput1 = prompt ("Enter first string : ");
let strInput2 = prompt ("Enter second string : ");

if (strInput1 === strInput2) {
alert ("The strings are equal.");
} else {
  alert("The strings are not equal.");
}


/*The program checks if a student is eligible for admission to a CSS program based on 
their age and academic performance. To be eligible, the student must be between the 
ages of 18 and 24, and have a minimum academic performance of 80%. However,
if the student is under 18, they may still be eligible if their academic performance is 
exceptional (90% or higher).*/

let age = prompt ("Enter age of student: ");
let academicPerformance = prompt ("Enter academic marks percentage: ");

if (age >= 18 && age <= 24 && academicPerformance >= 80) {
  alert("You are eligible for admission to CSS program.");
} else if (age < 18 && academicPerformance >= 90) {
  alert("You are eligible for admission to CSS program.");
} else {
  alert("You are not eligible for admission to CSS program.");
}