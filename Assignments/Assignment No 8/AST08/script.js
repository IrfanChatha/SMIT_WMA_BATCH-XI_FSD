//1.Declare two variables: admin and name. Assign the value "Umair Azmat" to name. Copy the value from name to admin. Show the value of admin using alert (must output Name).
let name = "Umair Azmat";
let admin = name;
alert(admin);
console.log(admin);

//2.Create a variable with the name of our planet. How would you name such a variable?
let ourPlanet;
ourPlanet = "Earth";
console.log(ourPlanet);

//3.Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentVisitor = "Irfan";
console.log(currentVisitor);

//4.Create a string variable called favDrink and assign a value to it.
let favDrink = "Orange Juice";
console.log(favDrink);

//5.Create a number variable called favNum and assign a value to it
let favNum = Number(2023);
console.log(favNum);

//6.Create a function block called myFavs that console logs your answers, don't forget to invoke the myFavs function.
function myFavs() {
    console.log(admin, ourPlanet, currentVisitor, favDrink, favNum);
  }      myFavs();

//7.Create an object called person, with name set to Umair and age set to 20.
let pName = "Umair"; age = 20 ; 
console.log(pName , age);

//8.write a JS program, define two variables and sum those two variable and save result in third variable and print in console?
let aAdd = 5; 
let bAdd = 10;
let cAdd = Number(aAdd) + Number(bAdd);
alert("Result is " + cAdd);
console.log(cAdd);

//9.write a JS program, that can divide two numbers and show the result in console? console.log("result of firstProgram", a);
let num1 = 4; 
let num2 = 8;
let a = Number(num2) / Number(num1);
console.log("result of firstProgram", a);

//10.write a JS program, that can add two number, divide result by 5 and show in console?console.log("result of firstProgram", a);
let numAdd1 = 4; 
let numAdd2 = 8;
let addNum = Number(numAdd1) + Number(numAdd2);
let divNum = addNum / 5;
console.log("result of firstProgram", divNum);

//11.write a JS program, that can convert temp from F into C and show into console, using C = (F − 32) * 5/9. use if F = 50, what will be the value of C?
let fahrenheit = 50;
let celsius = (fahrenheit - 32) * 5/9;
console.log(celsius);

//12.Write a JavaScript program to find the sum of two numbers obtained from prompt and display the result using alert.
let aSub2 = prompt("Enter First Value: "); 
let bSub2 = prompt("Enter Second Value: ");
let cSub2 = Number(aSub2) + Number(bSub2);
alert("Result is " + cSub2);
console.log(cSub2);

//13.Write a JavaScript program to find the difference of two numbers obtained from prompt and display the result using console.log.
let aSub = prompt("Enter First Value: "); 
let bSub = prompt("Enter Second Value: ");
let cSub = Number(aSub) - Number(bSub);
alert("Result is " + cSub);
console.log(cSub);

//14.Write a JavaScript program to find the product of two numbers obtained from prompt and display the result using alert.
let aMul = prompt("Enter First Value: "); 
let bMul = prompt("Enter Second Value: ");
let cMul = Number(aMul) * Number(bMul);
alert("Result is " + cMul);
console.log(cMul);

//15.Write a JavaScript program to find the quotient of two numbers obtained from prompt and display the result using console.log.
let aDiv = prompt("Enter First Value: "); 
let bDiv = prompt("Enter Second Value: ");
let cDiv = Number(aDiv) / Number(bDiv);
alert("Result is " + cDiv);
console.log(`The quotient of ${aDiv} and ${bDiv} is: ${cDiv}`);


//16.Write a JavaScript program to find the remainder of two numbers obtained from prompt using the modulus operator and display the result using alert.
let aMod = prompt("Enter First Value: "); 
let bMod = prompt("Enter Second Value: ");
let cMod = Number(aMod) % Number(bMod);
alert("Result is " + cMod);
console.log(`The remainder of ${aMod} and ${bMod} is: ${cMod}`);


