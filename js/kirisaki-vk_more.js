// This script shows the more button when there is a hover on the cards

$('.card-img-top').mouseenter(() => $('.more').addClass('show')).mouseleave(() => $('.more').removeClass('show'))