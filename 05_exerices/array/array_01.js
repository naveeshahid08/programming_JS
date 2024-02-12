// Initial array of team members
let teamMembers = ["John", "Emily", "Mike", "Sarah"];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:

/* ß */

// Exercise 2: Remove the first member of the array.
// Write your code here:
/* ß */

// Exercise 3: Remove the last member of the array.
// Write your code here:
teamMembers.pop("Sarah");
console.log(teamMembers);

// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:
teamMembers.unshift("Alex");
console.log(teamMembers);
// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:
teamMembers.push("Linda");
console.log(teamMembers);

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:
const newArray = teamMembers.slice(0, 2);
console.log(newArray);
// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:
let value = "Mike";
let index = 0;
for (let i = 0; i < teamMembers.length; i++) {
  if (teamMembers[i] == value) {
    index = i;
    break;
  }
}
console.log("The index of element ", teamMembers[index], " is ", index, ".");

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:
let value01 = "Jake";
let index01 = -1;
for (let i = 0; i < teamMembers.length; i++) {
  if (teamMembers[i] == value01) {
    index01 = i;
    break;
  }
}
if (index01 !== -1) {
  console.log("Found", teamMembers[index01]);
} else {
  console.log("Not Found in Array");
}
// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:

teamMembers.splice(3, 1, "Carol", "Bruce");
const slicedArray = teamMembers;
console.log(teamMembers.length);
console.log(slicedArray);
// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:
const newMember = ["Bob"];
const newConct = teamMembers.concat(newMember);
console.log(newConct);

const newTeam = teamMembers.concat("Bob");
console.log(newTeam);
// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:
const copiedArray = teamMembers.slice(0, 7);
console.log(copiedArray);

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
// Write your code here:
let newMembers = ["Tina", "Dean"];
let combineArray = teamMembers.concat(newMembers);
console.log(combineArray);
console.log(teamMembers);
// Exercise 13: Finding all occurrences of a John
// Write your code here:
let value02 = "John";
let index02 = 0;
for (let i = 0; i <= teamMembers.length; i++) {
  if (teamMembers[i] == value02) {
    index02 += 1;
  }
}
if (index02 !== 0) {
  console.log(`The searched item is found ${index02} times`);
} else {
  console.log("Nothing Found");
}
// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:
const transforMember = teamMembers.map((element) => element.toUpperCase());
console.log(transforMember);
