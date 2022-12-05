var globalUserName = "John"; // --> This is var keyword. Var is a global variable. It can be accessed anywhere in the program.
let userName = "John"; // --> This is let keyword. Let is a local variable. It can be accessed only in the block where it is declared.
const PI = 3.14; // --> This is const keyword. Const is a constant variable. It cannot be changed once it is declared.
// let fullName = let lastName // --> This is will be an error. Because lastName is statement, not expression.
let fullName = (lastName = "Doe"); // --> This is not an error. Because lastName is expression, not statement.


// Path: 01 - Fundamentals\variables.js