//Arithmetic Operations


//Add Function


function add(a, b) {
  return a + b;
}



//Subtract Function


function subtract(a, b) {
  return a - b;
}



//Multiply Function


function multiply(a, b) {
  return a * b;
}



//Divide Function


function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero.";
  }
  return a / b;
}



//Example Usage



console.log(add(5, 3));         // Output: 8
console.log(subtract(10, 4));   // Output: 6
console.log(multiply(7, 2));    // Output: 14
console.log(divide(9, 3));      // Output: 3
console.log(divide(10, 0));     // Output: "Cannot divide by zero."