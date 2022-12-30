/**
 * We should know about the parameters and the arguments. And also we should know how to differentiate between the parameters and the arguments. And also we should know how to use the parameters and the arguments.
 * 1. Parameter is the variable that we use to get the value from the argument. And we can use the parameters to do some business logic.
 * 2. Argument is the value that we pass to the function. And we can use the arguments to pass the value to the function. And we can use the arguments to pass the value to the parameters.
*/

function multiplyFunction (firstValue, secondValue) { // --> As you can see we've got two parameters and we define named the parameters as firstValue and secondValue. And we can use the parameters to do some calculation.
  return firstValue * secondValue;
}

multiplyFunction(10, 2); // --> As you can see we've got two arguments and we define the value of the arguments as 10 and 2. And we can use the arguments to pass the value to the parameters.

const userData = {
  name: 'Alex',
  age: 20,
}

function sayHello ({name, age}) { // --> If we've parameter that is an object, we can use destructuring to access the value of the key.
  console.log(`Hello ${name}, you are ${age} years old.`);
}
sayHello(userData);

function exponentsFormula(baseNumber, exponent = 2) { // --> As you can see, we can use the default value on the parameters. Why we should use the default value? Because if we don't use the default value, the value of the parameter will be undefined. And if we use the default value, the value of the parameter will be the default value. 
  let result = baseNumber ** exponent;
  console.log(`${baseNumber} to the power of ${exponent} is ${result}`);
}
exponentsFormula(2) // --> And if we just send one argument, the value of the parameter will be use the default value. And you should know in function javascript that's doesn't do check the number of the arguments. So if we send one argument, the value of the parameter will be use the default value. And if we send two arguments, the value of the parameter will be use the value of the argument.

function sumOfNumbers(...numbers) { // --> In Javascript function, we can use rest parameters using three consecutive dots. It'll be help us to handle unknow arguments who will be send to the function. And we can use the rest parameters to handle the unknow arguments.
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  console.log(result);
}

// Path: 03 - Functions\parameters-function.js