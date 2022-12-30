const sayName = function (name) { // --> As we know, in ES5 < we declare function expression like this. But in ES6 we can use arrow function to declare function expression.
  console.log(name);
}

const sayHello = () => { // --> But now, in ES6 we've arrow function. And as you can see, we can use arrow function to declare function expression. And as you can see, we don't need to use the keyword function to declare the function. And we don't need to use the keyword return to return the value. And we don't need to use the curly braces to wrap the function body. And we don't need to use the parentheses to wrap the parameter.
  console.log('Hello');
}

const sayGoodbye = name => { // --> As you can see, if we only have one parameter, we don't need to use the parentheses to wrap the parameter.
  console.log(`Goodbye ${name}`);
}

const multiplyNumber = (firstNumber, secondNumber) => firstNumber * secondNumber; // --> As you can see, if we only have one line of code in the function body, we don't need to use the curly braces to wrap the function body. And we don't need to use the keyword return to return the value.

// Path: 03 - Functions\arrow-function.js