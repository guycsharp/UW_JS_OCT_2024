// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
class Person { // I did it this way since it said 'object', I thought we need a 'class' to create an object
  constructor(fname, lname,food) {
    this.firstName = fname;
    this.lastName = lname;
    this.favFood = food;
    this.BestFriend = null;
  }
}

var Me1 = new Person('Sujan','Man','Pizza');
Me1.BestFriend = new Person('best','friend','dosa');


// 2. console.log best friend's firstName and your favorite food
console.log(Me1.BestFriend.firstName);
console.log(Me1.favFood);



// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
var tictac = [
  ['-', 'O', '-'],
  ['-', 'X', 'O'],
  ['X', '-', 'X']
];


// 4. After the array is created, 'O' claims the top right square.
// Update that value.
tictac[0][2]='O';


// 5. Log the grid to the console.
for(var i=0;i<3;i++){
  for(var j=0;j<3;j++){
    console.log(tictac[i][j]);
  }
}

// this also works, learning something new
console.log(tictac[0]);
console.log(tictac[1]);
console.log(tictac[2]);


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
var email = 'foo@bar.baz';

function isValidEmail(mail) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(mail);
}

console.log(isValidEmail(email));  // true
console.log(isValidEmail('foo@@bar.baz'));  // false
console.log(isValidEmail('foobar.baz'));  // false



// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const convertedAssignmentDate = new Date(assignmentDate);

console.log(convertedAssignmentDate.toDateString());

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
var days7After = new Date(convertedAssignmentDate);
days7After.setDate(convertedAssignmentDate.getDate()+7)
console.log(days7After.toDateString());

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function createHtmlDate(YYYY, MM, DD, months){
  return `<time datetime="${YYYY}-${MM}-${DD}">${months[MM-1]} ${DD}, ${YYYY}</time>`
}
// 10. log this value using console.log
console.log(createHtmlDate(1989,1,30,months))