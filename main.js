// Function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
  return num1 / num2;
}

// Prompt user for input
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

// Prompt user for operation
let operation = prompt("Enter operation (+, -, *, /):");

// Perform operation based on user input
let result;
switch (operation) {
  case "+":
    result = add(num1, num2);
    break;
  case "-":
    result = subtract(num1, num2);
    break;
  case "*":
    result = multiply(num1, num2);
    break;
  case "/":
    result = divide(num1, num2);
    break;
  default:
    result = "Invalid operation";
}

// Display result to user
alert(`Result: ${result}`);
