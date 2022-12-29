const myMap = new Map([
  ['name', 'John'],
  ['age', 20],
  [true, true]
]); // --> As we know in ES6 we have Map. Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

console.log(myMap.size); // --> This is how we get the size of the Map.
console.log(myMap.get('name')); // --> This is how we get the value of the key.

myMap.set('name', 'Alex'); // --> This is how we set the value of the key.
myMap.set('skills', ['JavaScript', 'PHP', 'Go']); // --> This is how we set the value of the key.

console.log(myMap.has('name')); // --> This is how we check if the key exist in the Map.
console.log(myMap.has('address')); // --> This is how we check if the key exist in the Map.

myMap.delete('name'); // --> This is how we delete the key and its value.
myMap.clear(); // --> This is how we clear all the key and its value.
myMap.forEach((value, key) => { // --> This is how we loop through the Map.
  console.log(key, value);
});

/**
 * As we know we use Map to store the key and its value. But we can use Map to store the key and its function. And actually in large projects we use Map to store the key and its function. So If we compare Map with Object, we can say that Map is more flexible than Object. Because we can use any type of data as the key in Map. But in Object we can only use string as the key.
 */
// Path: 02 - Data Structure\map.js