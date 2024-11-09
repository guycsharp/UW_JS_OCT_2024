// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const buyNow = document.createElement('a');
buyNow.setAttribute('id', 'cta');
buyNow.innerText = 'Buy Now';

const main = document.getElementsByTagName('main');
main[0].appendChild(buyNow);

// Access (read) the data-color attribute of the <img>,
// log to the console
const img = document.getElementsByTagName('img');
console.log(img[0].getAttribute('data-color'));

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const Turbocharged = document.getElementsByTagName('li');
const highlight = [...Turbocharged];
highlight.forEach((item) => {
    if (item.innerText == 'Turbocharged') {
        item.className = 'highlight'
    }

})


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const pTag = document.getElementsByTagName('p');
pTag[0].innerText = "";