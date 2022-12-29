const setListOfNumbers = new Set([1, 4, 6, 4, 1])
console.log(setListOfNumbers) // --> Set { 1, 4, 6 }. As you can see, the Set will only store the unique value. So if we have the same value, it will only store one of them.
setListOfNumbers.add(10) // --> This is how we add new value to the Set. As you can see, we can use add method to add new value to the Set.
setListOfNumbers.add(10) // --> If we add the same value, it will not add it again. Because the Set will only store the unique value.
setListOfNumbers.add(10).add(20).add(30) // --> We can chain the add method.
setListOfNumbers.delete(10) // --> This is how we delete the value from the Set.
setListOfNumbers.clear() // --> This is how we clear all the value from the Set.

setListOfNumbers.forEach((value) => { // --> This is how we loop through the Set.
  console.log(value);
});

// Path: 02 - Data Structure\set.js