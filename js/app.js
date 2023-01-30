$(window).on("scroll",function() {
    let win = this;
    if ($(win).scrollTop() > 1){
        setTimeout(() => {
            $('header').addClass("sticky-top bg-white");
            $('header').removeClass("marginize-top-ab");
        }, 50);
    }else{
        setTimeout(() => {
            $('header').removeClass("sticky-top bg-white");
            $('header').addClass("marginize-top-ab");
        }, 100);
    }
    $(".fade-scroll-ab").each((i,element)=>{
        if($(win).scrollTop() - ($(element).offset().top/2) >= -50){
            element.classList.add('actived-ab')
            element.style.animationDelay = $(element).attr("data-fade-show")
        }
    })
});


$(window).on("load",function(){
    if ($(this).scrollTop() > 1){
        setTimeout(() => {
            $('header').addClass("sticky-top");
            $('header').removeClass("marginize-top-ab");
        }, 300);
    }

    $("body").addClass("overflow-hidden");

    setTimeout(() => {
        $("body").removeClass("overflow-hidden")
        $(".loader-container-ab").addClass("fadeLoader-ab")
        setTimeout(() => {
            $(".loader-container-ab").removeClass("fadeLoader-ab")
            $(".loader-container-ab").addClass("d-none")
        }, 250);
    },100);
});


// Set Menu from left 
$(".toggle-nav-side-ab").on("click",function(){
    $(".area-ab").toggleClass("only-blur-ab")
    $(".width-side-ab").toggleClass("active-ab")
})
$(".area-ab").on("click",function(){
    $(".area-ab").removeClass("only-blur-ab")
    $(".width-side-ab").removeClass("active-ab")
})
$(".width-side-ab").each(function(i,element){
    $(element).on("click",function(){
        $(".area-ab").removeClass("only-blur-ab")
        $(".width-side-ab").removeClass("active-ab")
    })
})


// for loading
$(".fade-animation-showing-ab").each(function(i,elem){
    elem.style.animationDelay =  $(elem).attr("data-fade-show")
})
