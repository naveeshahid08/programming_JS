/* Task 1
Create a JavaScript object named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here
const library = [
  {
    ID: "Book1",
    title: "The Alchemist",
    author: "Paulo Cohelo",
    yearPusblised: "1988",
  },
  {
    ID: "Book2",
    title: "Maktub ",
    author: "Paulo Cohelo",
    yearPusblised: "1994",
  },
];

console.log(library);

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(library[0].title);
library[1].yearPusblised = 1990;
console.log(library[1]);
/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library[0].genere = "Novle";
library[0]["isAvaialble"] = true;
console.log(library);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
class Book {
  constructor(title, author, yearPusblised, genere) {
    this.title = title;
    this.author = author;
    this.yearPusblised = yearPusblised;
    this.genere = genere;
  }
}
const Book1 = new Book("Naveed", "Shahid", "2024", "Novel");
library.newBook;
library.push(Book1);
console.log(library);
/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
