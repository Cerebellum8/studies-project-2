/**
* VARIABLES
* 0.  Named containers that store data during the spand of a program. can point to values of a * particular data type, like a Number, String,
* Boolean, Array, Object or another data-type.VAriables are called and once declared the value can be changed
* variables 
* 
*1. To create a avariable we use the keyword  var, let. or const and a name for the vairable
* 2. Their are to phases when using a variable declaration amd  initionalization 
*/

// 1. Declaration //
  // declaration phase myVar prints undefind because variable has been named/declared but hasnt been given a value/intialized
  
  var myVar;
  console.log(myVar);// prints => undefined  
  
// 2. Assignment //
// giving value to named variable using an assignment operator
// prints "dogs" to console because a value has been given

  var myVar = "dogs";
  console.log(myVar); // prints => "dogs"

// 3. Re-assignment //
//  changes value of variable
// myVar value changes from dogs to cats
myVar = "cats"; // prints => "cats"
// 4. var, let, const//
// three ways to declare variables 
// each has different scoped rules when hoisting, scoping and re-assigning

// 5. Hoisting //
// n 