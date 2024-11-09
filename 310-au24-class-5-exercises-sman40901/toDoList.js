// If an li element is clicked, toggle the class "done" on the <li>
const toggleDone = (e) => {
  const item = e.target.parentElement;
  const itemClass = (item.className) ? '' : 'done'
  item.className = itemClass;
}


// If a delete link is clicked, delete the li element / remove from the DOM
const deleteTodo = (e) => {
  // var elementId = e.srcElement.id;
  // console.log(elementId)
  // const removeItem = document.getElementById(elementId.replace('-del',''))
  // console.log(removeItem)
  // removeItem.remove();
  const li = e.target.parentElement
  console.log(li)
  li.remove();
}

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

// const getStrLiSpan = (todoItem) => {
//   // return `<li id='${todoItem}'><span>${todoItem}</span>
//   //         <a class="delete" id='${todoItem}-del'>Delete</a></li>`
//   // return `<span>${todoItem}</span>
//   //         <a class="delete" id='${todoItem}-del'>Delete</a>`
// }

const ul = document.getElementsByClassName('today-list')[0];
console.log(ul);
ul.querySelector('li').addEventListener('click', toggleDone);
ul.querySelector('.delete').addEventListener('click', deleteTodo);


const addListItem = function (e) {
  // e.preventDefault(); 
  const input = document.getElementsByTagName('input')[0];
  console.log(input)
  const text = input.value; // use this text to create a new <li> 
  input.value = ''; // clear input field 
  // Create new <li> element 
  const todoNode = document.createElement('li');
  // todoNode.innerHTML = getStrLiSpan(text);
  const spanNode = document.createElement('span');
  spanNode.innerText = text + " ";
  spanNode.addEventListener('click', toggleDone);

  const aNode = document.createElement('a');
  aNode.innerText = "Delete";
  aNode.className = "delete";

  // Add event listener to the delete button 
  aNode.addEventListener('click', deleteTodo);

  // todoNode.querySelector('.delete').addEventListener('click', deleteTodo);

  todoNode.appendChild(spanNode);
  todoNode.appendChild(aNode);

  // Append the new <li> to the list 
  ul.appendChild(todoNode);
};
