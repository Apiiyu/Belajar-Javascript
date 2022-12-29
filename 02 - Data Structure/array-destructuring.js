const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
const [firstFood, secondFood, thirdFood, fourthFood] = favorites; // This is how we use array destructuring to get the value of the array.

const [, , , lastFood] = favorites; // This is how we can get just the last value of the array. As we know we shouldn't define the variable that we don't use. But we can use comma to skip the value of the array.

let myFirstFavoriteFood = 'Chicken';
let mySecondFavoriteFood = 'Beef';
[myFirstFavoriteFood, mySecondFavoriteFood] = [mySecondFavoriteFood, myFirstFavoriteFood]; // This is how we can swap the value of the variable. We can use destructuring assignment to swap the value of the variable.
[myFirstFavoriteFood, mySecondFavoriteFood] = favorites // This is how we can change the value of the variable using destructuring assignment. We can use destructuring assignment to change the value of the variable.

const [first, ...otherFoods] = favorites; // This is how we can get the first value of the array and the rest of the value of the array. We can use destructuring assignment to get the first value of the array and the rest of the value of the array.

const [myFood, second, third, fourth, fifth = 'Sushi'] = favorites; // This is how we can use default value to change the value of the variable. We can use destructuring assignment to change the value of the variable.

// Path: 02 - Data Structure\array-destructuring.js