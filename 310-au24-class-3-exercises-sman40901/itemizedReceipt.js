// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
// const logReceipt = (...args) => { // this one was original
const logReceipt = (args) => {
  let total = 0;
  let tax = 0;
  // const items = (...args)
  const items = [...args]; // array re-assign for naming purpose
  items.forEach((item) => {
    if (item.descr === 'tax') {
      tax = item;
    } else {
      console.log(`${item.descr} - ${item.price}`);
      total += item.price;
    }
  });
  if (tax != 0) {
    console.log(`SubTotal - ${total}`);
    console.log(`Tax - ${tax.price} %`);
    total += total * (tax.price / 100);
  }
  console.log(`Total - ${total}`);
}


// Check
logReceipt([ // James asked to convert this to an array
  { descr: 'tax', price: 10 }, // comment this line to calculate without tax
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
]);

// logReceipt(
//   { descr: 'tax', price: 10 }, // comment this line to calculate without tax
//   { descr: 'Burrito', price: 5.99 },
//   { descr: 'Chips & Salsa', price: 2.99 },
//   { descr: 'Sprite', price: 1.99 }
// );
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
