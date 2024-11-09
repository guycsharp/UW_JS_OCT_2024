/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
let pizza1 = Math.PI  * ((13/2) ** 2);
console.log(pizza1);
let pizza2 = Math.PI  * ((17/2) ** 2);
console.log(pizza2);


// 2. What is the cost per square inch of each pizza?
console.log(16.99/pizza1);
console.log(19.99/pizza2);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
function drawRandomCard() {
    return Math.floor(Math.random() * 13) + 1;
}


// 4. Draw 3 cards and use Math to determine the highest
// card

let card1 = drawRandomCard();
let card2 = drawRandomCard();
let card3 = drawRandomCard();
console.log(Math.max(card1,card2,card3));


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstName = 'fname';
let lastName = 'lname';
let stAdd = '123 st ave';
let state = 'WA';
let city = 'Seattle';
let zip = '12345';


let envelope=`${firstName} ${lastName}
${stAdd}
${city},${state} ${zip}`


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let lastIndex = envelope.indexOf(' ');
console.log(envelope.substring(0,lastIndex));
console.log(envelope.split(' ').slice(0,1));
console.log(envelope.slice(0,lastIndex));
console.log(typeof (envelope.split(' ').slice(0,1)));


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020,1,1);
const endDate = new Date(2020, 4, 1);
const midDateUTC = (endDate.getTime() + startDate.getTime())/2;

const midDate = new Date(midDateUTC)
console.log(midDate);