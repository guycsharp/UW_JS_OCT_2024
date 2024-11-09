// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const clickMoreInfo = (e) => {
  e.preventDefault();
  alert('here is more info');
}

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
// document.getElementById('cat').removeEventListener('click'); // this did not work
document.getElementById('dog').addEventListener('click', (event) => {
  // e.preventDefault(); // this did not work

  alert('Bow wow!');
  event.stopPropagation(); // Prevents the event from bubbling up to the parent elements 
});