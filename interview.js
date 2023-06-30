// Given the following array (users) of objects complete the tasks described below – Code efficiency will be considered.
// (Use the programming language of your preference):
// 1.- Sort the array by attribute “name” (Descending).
// 2.- Calculate the current age of each user and add an attribute called 'age' with the value obtained.
// 3.- Delete duplicated objects.
// 4.- Find the youngest user.

// Please print each step result on the screen.
const users = [
  {
    name: "Josh",
    birthDate: "2000-08-09",
  },
  {
    name: "Stephan",
    birthDate: "1997-01-01",
  },
  {
    name: "Carl",
    birthDate: "2005-10-22",
  },
  {
    name: "Maria",
    birthDate: "1991-03-15",
  },
  {
    name: "Josh",
    birthDate: "2000-08-09",
  },
  {
    name: "Peter",
    birthDate: "1995-05-21",
  },
  {
    name: "Moe",
    birthDate: "1993-07-21",
  },
  {
    name: "Stephan",
    birthDate: "1997-01-01",
  },
  {
    name: "Albert",
    birthDate: "1989-06-08",
  },
  {
    name: "Henry",
    birthDate: "2002-07-29",
  },
  {
    name: "Paul",
    birthDate: "1995-04-14",
  },
  {
    name: "Albert",
    birthDate: "1989-06-08",
  },
];

// exercise 1

// const response1 = users.sort((a,b) => a.name > b.name ? -1 : 1);
// console.log('response 1', response1)

// // exercise 2


// const response2 = users.map((user) => {

// })