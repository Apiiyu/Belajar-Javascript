const userData = {
  name: 'Alex',
  age: 20,
  skills: ['JavaScript', 'PHP', 'Go'],
}

// const { name, age, skills } = userData; // --> We can use destructuring to access the value of the key.
const { name = 'John', age = 10, isMale = false } = userData; // --> We can use destructuring to access the value of the key that doesn't exist. It will return undefined. But we can use default value to change the value of the variable.
const [firstSkill, secondSkill, thirdSkill] = skills; // --> We can use destructuring to access the value of the array.

let firstName = 'Alex';
let lastName = 'Smith';
const secondUserData = {
  firstName: 'John',
  lastName: 'Doe',
}

const { firstName: first, lastName: last } = secondUserData; // --> We can use destructuring to change the name of the key.
({ firstName, lastName } = secondUserData); // --> Or we can use destructuring assignment to change the value of the variable.

// Path: 02 - Data Structure\object-destructuring.js