$(document).ready(() => {
    console.log('ready');

    const listItems = $('li');
    console.log(listItems);

    function removeBuyNow (e) {
        e.preventDefault();
        $(this).replaceWith('<span>Added to cart</span>');
    }

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const imgColor = $('img').data('color');
    console.log('Image color:', imgColor);

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    const thirdLi = $('ul li').eq(2);
    thirdLi.addClass('highlight');

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $('p').last().remove();

    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const ctaLink = $('<a id="cta" href="#">Buy Now!</a>');
    $('main').append(ctaLink);

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $('#cta').on('click', removeBuyNow);
});


  