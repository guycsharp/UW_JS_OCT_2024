// When a user clicks the + element, the count should increase by 1 on screen.
let count = 0;
const counter = document.getElementById('counter')

const plus = document.getElementById('plus')
plus.addEventListener('click', (event) => {
    console.log("plus Button clicked!");
    count++;
    counter.innerText = count;
});

// When a user clicks the – element, the count should decrease by 1 on screen.
const minus = document.getElementById('minus')
minus.addEventListener('click', (event) => {
    console.log("minus Button clicked!");
    count--;
    counter.innerText = count;
});