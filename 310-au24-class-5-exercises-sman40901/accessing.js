// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const headerElement = document.getElementById('weather-head');
headerElement.innerText='"February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
const sunItemsNodeList = document.querySelectorAll('.sun'); // id with . for query selector
const sunArr = [...sunItemsNodeList]; // Array.from(sunItems)
sunArr.forEach((item)=>{
    // item.classList.add('orange-color');
    item.style.color = "orange"
})

// Change the class of the second <li> from to "sun" to "cloudy"
// sunArr[1].classList.add(cloudy);
sunArr[1].className ='cloudy';
// sunArr[1].classList.toggle(cloudy); // another way to do this?
