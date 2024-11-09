// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const main = body.getElementsByTagName('main');
console.log(main[0]);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const main1 = ul.parentNode
const body1 = main1.parentNode
console.log(body1);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const ul1 = main1.parentNode.getElementsByTagName('ul');
const il3 =  ul1[0].children;
console.log(il3[2]);
