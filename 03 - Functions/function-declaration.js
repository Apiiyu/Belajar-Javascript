function multiplyFunction (firstValue, secondValue) { // --> This is how we declare the function. We can use function declaration to declare the function. And as you can see in this function we've got two parameters. And we can use the parameters to do some calculation.
  /**
   * @note 1. Parameter is the variable that we use to get the value from the argument.
   * @note 2. Argument is the value that we pass to the function.
   */

  return firstValue * secondValue;
}

function divideFunction (firstValue, secondValue) {
  return firstValue / secondValue;
}

const result = divideFunction(10, 2); // --> As you can see we can use the function to do some calculation. And we can store the result of the function to the variable.

const sayHello = function () { // --> This is how we declare the function. We can use function expression to declare the function.
  console.log('Hello');
}

// Path: 03 - Functions\function-declaration.js