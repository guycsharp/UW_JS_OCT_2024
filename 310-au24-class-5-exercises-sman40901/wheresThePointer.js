// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const lbl = document.getElementById('h1Position')

const getMousePosition = (e) =>{
    lbl.innerText =  ` X : ${e.clientX} Y : ${e.clientY}`;
}

const tableEl = document.getElementsByTagName('table');
const td = [...tableEl[0].getElementsByTagName('td')];

td.forEach((element) => {
    element.addEventListener('click', getMousePosition);
});


// console.log(td);