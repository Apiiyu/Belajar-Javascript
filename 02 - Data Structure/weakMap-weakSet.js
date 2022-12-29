let visitorsCountMap = new Map();

const countUser = (user) => { // --> We create a function to count the user.
  let count = visitorsCountMap.get(user) || 0;
  visitorsCountMap.set(user, count++);
}

let johnDoe = { name: 'John Doe' }; 
countUser(johnDoe); // --> We call the function to count the user.
johnDoe = null; // --> We should remove the reference to the object. Because if we don't remove the reference to the object, the garbage collection will not work.

setTimeout(() => { // --> We use setTimeout to simulate the time that the user is not active. And actually we should need this for waiting garbage collection is working.
  console.log(visitorsCountMap);
}, 10000)
// Path: 02 - Data Structure\weakMap-weakSet.js
