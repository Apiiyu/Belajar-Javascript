/*
    In this file we will learn about looping in JavaScript
    There are 3 types of looping in JavaScript:
    1. for loop
    2. while loop
    3. do while loop

    For loop: 
    for (initialization; condition; increment/decrement) {
      // do something
    }

    While loop:
    while (condition) {
      // do something
    }

    Do while loop:
    do {
      // do something
    } while (condition);
*/

for (let index = 0; index <= 5; ++index) { // Actually we can use index++ or ++index. But ++index is faster than index++, because it will be increment the value of index first, then it will be return the value of index. But index++ will be return the value of index first, then it will be increment the value of index.
  console.log(index);
}

let myArray = ["JavaScript", "Python", "Java", "C++", "C#"];
for (items of myArray) { // --> This is a for of loop. It will be loop through the array and return the value of each item in the array.
  console.log(items);
}

let whileIndex = 0;
while (whileIndex <= 5) { // --> This is a while loop. It will be loop through the code inside the curly braces until the
  console.log(whileIndex);
  ++whileIndex; // --> We need to increment the value of whileIndex, otherwise it will be loop forever. But actually it doesn't matter if we'll use post increment or pre increment. Because it will be increment the value of whileIndex first, then it will be return the value of whileIndex. But it's better to use pre increment, because it will be faster than post increment.
}

let doWhileIndex = 0;
do { // --> This is a do while loop. It will be loop through the code inside the curly braces at least once, even if the condition is false.
  console.log(doWhileIndex);
  ++doWhileIndex; // --> This is like a while loop. We should increment/decrement the value of doWhileIndex, otherwise it will be loop forever.
} while (doWhileIndex <= 5);

// Path: 01 - Fundamentals\conditional.js
