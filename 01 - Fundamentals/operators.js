const userName = "Rafi"; // --> Actually in this line, we've (=). And it used to assign a value to a variable. So we can call it as an assignment operator.
let firstValue = 10;
let stringFirstValue = "10";
let secondValue = 20;
const finalValue = firstValue += secondValue; // --> In this line, we've (+=). That's mean firstValue = firstValue + secondValue. So we can call it as an aritmatic operator.

// --> In this line, we've (==). That's mean firstValue == stringFirstValue. So we can call it as an comparison operator.
const compareValue = firstValue == stringFirstValue // --> It will be return true. Because it's compare the value of firstValue and stringFirstValue. And the value of firstValue and stringFirstValue is same. 
const compareValueWithDataType = firstValue === stringFirstValue // --> It will be return false. Because it's compare the value of firstValue and stringFirstValue. And the value of firstValue and stringFirstValue is same. But it's also compare the data type of firstValue and stringFirstValue. And the data type of firstValue and stringFirstValue is not same.

// Path: 01 - Fundamentals\operators.js