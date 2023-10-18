
function calculateAndDisplay(num1, num2, operator) {
    var result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          document.write("Division by zero is not allowed");
          return;
        }
        break;
      default:
        document.write("Invalid operator");
        return;
    }
  
    document.write("Result: " + result);
  }

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let operator  = prompt("enter operator");

calculateAndDisplay(num1, num2, operator)