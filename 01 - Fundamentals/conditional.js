const isTodayRaining = true;
const programmingLanguage = "JavaScript";

if (isTodayRaining) { // --> This is a conditional statement. And it's check the value of isTodayRaining. If the value of isTodayRaining is true, then it will be execute the code inside the curly braces. If the value of isTodayRaining is false, then it will be skip the code inside the curly braces.
  console.log("Today is raining.");
} else {
  console.log("Today is not raining.");
}

if (programmingLanguage === "JavaScript") { // --> This is also a conditional statement, but in this case we're check two things. First, we're check the value of programmingLanguage. Second, we're check the data type of programmingLanguage. If the value of programmingLanguage is "JavaScript" and the data type of programmingLanguage is "string", then it will be execute the code inside the curly braces. If the value of programmingLanguage is not "JavaScript" or the data type of programmingLanguage is not "string", then it will be skip the code inside the curly braces.
  console.log("JavaScript is easy to learn!.");
} else if (programmingLanguage === "Python") {
  console.log("Python is easy to learn!.");
} else {
  console.log("I don't know this programming language.");
}

isTodayRaining ? console.log("We should bring an umbrella.") : console.log("We don't need to bring an umbrella."); // --> This is also a conditional statement. But in this case, we're use ternary operator (Conditional Expression). If the value of isTodayRaining is true, then it will be execute the code after the question mark. If the value of isTodayRaining is false, then it will be execute the code after the colon.

switch (programmingLanguage) { // --> This is also a conditional statement. But in this case, we're use switch statement. If the value of programmingLanguage is "JavaScript", then it will be execute the code inside the curly braces. If the value of programmingLanguage is "Python", then it will be execute the code inside the curly braces. If the value of programmingLanguage is not "JavaScript" or "Python", then it will be execute the code inside the curly braces.
  case "JavaScript":
    console.log("JavaScript is easy to learn!.");
    break;
  case "Python":
    console.log("Python is easy to learn!.");
    break;
  default:
    console.log("I don't know this programming language.");
}


// Path: 01 - Fundamentals\conditional.js
