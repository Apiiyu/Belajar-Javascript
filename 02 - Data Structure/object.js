const userProfiles = {
  name: 'Alex',
  age: 20,
  coords: { // --> We can use object inside object.
    lat: 0,
    lng: 15
  },
  'Phone Number': '123-456-7890', // --> We can use space or special character in the key name, but we need to use single quote or double quote.
}

console.log(userProfiles.name); // --> We can use dot notation to access the value of the key.
console.log(userProfiles['age']); // --> We can use bracket notation to access the value of the key.
console.log(userProfiles.coords.lat); // --> We can use dot notation to access the value of the key inside the object.
console.log(userProfiles['coords']['lng']); // --> We can use bracket notation to access the value of the key inside the object.

const { name, age } = userProfiles; // --> We can use destructuring to access the value of the key.
console.log(name, age);

userProfiles.name = 'John'; // --> We can use dot notation to change the value of the key.
userProfiles['age'] = 21; // --> We can use bracket notation to change the value of the key.
delete userProfiles.age; // --> We can use delete keyword to delete the key and its value.
// Path: 02 - Data Structure\object.js