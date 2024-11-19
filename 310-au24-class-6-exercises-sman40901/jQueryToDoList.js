$(document).ready(() => {

  /** * Toggles "done" class on <li> element */
  const toggleDone = function () {
    $(this).toggleClass('done');
  };

  /** * Delete element when delete link clicked */
  const deleteItem = function (e) {
    e.stopPropagation(); // Prevent triggering the li click event
    $(this).parent().remove();
  };

  // extra credit
  /** * Fade element when delete link clicked */
  const fadeItem = function (e) {
    e.stopPropagation(); // Prevent triggering the li click event
    console.log('fade clicked')
    $(this).parent().toggleClass('faded');
  };


  /** * Adds new list item to <ul> */
  const addListItem = function (e) {
    e.preventDefault();
    const taskText = $('#new-task').val();
    if (taskText.trim() !== "") {
      const newItem = `<li><span>${taskText}</span> <a href="#" class="delete">Delete</a></li>`;
      $('#todo-list').append(newItem);
      $('#new-task').val(''); // Clear the input field
    }
  };

  // Toggle "done" class on <li> when clicked
  $('#todo-list').on('click', 'li', toggleDone);

  // Remove <li> when delete link is clicked
  // $('#todo-list').on('click', '.delete', deleteItem);

  // extra credit
  $('#todo-list').on('click', '.delete', fadeItem);

  // Add a new item when "Add Item" link is clicked
  $('#add-item').click(addListItem);
});
