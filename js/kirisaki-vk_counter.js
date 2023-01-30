//Counter JS
// $(document).ready(function () {
//     jQuery(document).ready(function ($) {
//         $('.counter').counterUp({
//             delay: 10,
//             time: 1000
//         });
//     });
// });



const el = document.querySelector( '.counter' )
new Waypoint( {
    element: el,
    handler: function() { 
        counterUp( el ) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} )
