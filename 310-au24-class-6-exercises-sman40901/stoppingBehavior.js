// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

$(document).ready(() => {
  // When the bark button is clicked, should alert "Bow wow!"
  // Should *not* alert "meow"
  // Stopping default behavior for the link 
  $('#more-info').on('click', function (e) {
    e.preventDefault();
    alert("Here's some info");
  });


  // Stopping propagation for the button
  $('#dog').on('click', function (e) {
    e.stopPropagation();
    alert("Bow wow!");
  });

  $('#cat').on('click', function () {
    alert('meow!');
  });
});