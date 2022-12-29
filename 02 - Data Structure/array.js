let myArray = ["Cokelat", 42.5, 22, true, "Javascript"];

console.log(myArray[0]); // --> This is how we access the value of the array.
console.log(myArray[100]); // --> This is how we access the value of the array that doesn't exist. It will return undefined.

myArray.push("React"); // --> This is how we add new value to the array using method push.
myArray.pop(); // --> This is how we remove the last value of the array using method pop.
myArray.shift(); // --> This is how we remove the first value of the array using method shift.
myArray.unshift("Cokelat"); // --> This is how we add new value to the array using method unshift.

delete myArray[2]; // --> This is how we delete the value of the array. But we should know that the array will still have the same length. It will just return undefined. Because the delete keyword will only delete the value of the key, not the key itself.
myArray.splice(2, 1); // --> This is how we delete the element of the array. The first parameter is the index of the element that we want to delete. The second parameter is the number of element that we want to delete.

// Path: 02 - Data Structure\array.js