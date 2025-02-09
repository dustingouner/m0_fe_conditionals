// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents)
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("Is numberTeachers strictly equal to stringTeachers", numberTeachers === stringTeachers)
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents", numberTeachers !== numberStudents)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21)
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21)
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

// console.log(4 < 9);
// // YOU DO: Explain. This is a comparison operator to compare two similar data types. 
// // The comparison will result with a true statement

// var books = 3;
// // console.log(4 < books);
// // YOU DO: Explain. This is a conditional statement using a comparison operator to compare two similar data types 
// // in which the data type for books is also a number.  The comparison will result with a false statement because 4 is less than 3. 

// var friends = 6;
// var siblings = 2;
// // console.log(friends > siblings);
// // YOU DO: Explain. This is a conditional statement using a comparison operator to compare similar data types which are
// // described by each variable name. The comparison will result in a true statement because the number of friends is greater than siblings. 

// var attendees = 9;
// var meals = 8;
// console.log(attendees !== meals);
// YOU DO: Explain. This is a conditional statement using the comparison operator "not strictly equal" to compare similar data type 
// values of the variables attendees and meals. The comparison will result in a true statement.  


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
// console.log(isHungry && finishedHomework);
// // Determine if the user is hungry or has completed their homework
// console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
 console.log(lovesToPlay && lovesTreats)


// // Determine if the dog loves to play and loves the dog park
 console.log(lovesToPlay && lovesDogPark)


// // Determine if the dog loves to play or loves the dog park
 console.log(lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
if (lovesToPlay === true && age <= 1) {
    console.log("yes")
}
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: I used an if statement to print whether yes or no if my dog loved to play and was a year or less old. 
// I wasn't sure here if I needed to create a new variable to determine what age defines a puppy or not.  