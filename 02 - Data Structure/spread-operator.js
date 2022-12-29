const favoriteProgrammingLanguages = ['JavaScript', 'PHP', 'Go']
console.log(...favoriteProgrammingLanguages) // --> This is how we use spread operator to print the value of the array.
const otherFavoriteProgrammingLanguages = ['Python', 'C++', 'Java']
const allFavoriteProgrammingLanguages = [...favoriteProgrammingLanguages, ...otherFavoriteProgrammingLanguages] // --> This is how we use spread operator to combine two array.

const userProfiles = {
  name: 'Alex',
  age: 20,
}

const userLocations = {
  coords: {
    latitude: 0,
    longitude: 15,
  }
}

const userData = { // --> As you can see, we can use spread operator to combine two object. But you should know if the key is the same, the value of the key will be overwritten.
  ...userProfiles,
  ...userLocations,
}


// Path: 02 - Data Structure\spread-operator.js