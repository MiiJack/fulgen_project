$(window).on("scroll",function(){
    // header
    if($(this).scrollTop() > 1){
        $("header").removeClass("pt-4");
        $("header").addClass("pt-0 bg-white");
    }else{
        $("header").addClass("pt-4");
        $("header").removeClass("pt-0 bg-white");
    }

})

$(".menu-toggler").on("click",function(){
    $(".backdrop-blur").toggleClass("appear")
})
$(".backdrop-blur").on("click",function(){
    $(".backdrop-blur").removeClass("appear")
})



$(window).on("load",function() {
    // some dots loadings animation
    $(".loader-container-ab").fadeOut("slow"); 
    
    scrollInit(".scroll-anim",0.3)
});


function scrollInit(className,offset){
    // scroll-anim" data-type-anim="fadeIn" data-delay=".2s"
    // scroll-anim" data-type-anim="scaleFade" data-delay=".2s"

    function scroll(){
        $(className).each((i,element)=>{
    
            if($(window).scrollTop() >= (element.getBoundingClientRect().top*i)*offset){
                // $(element).removeClass("scroll-anim")
                if($(element).attr("data-type-anim") == "counter"){
                    // no opaque
                    $(element).css({"opacity" : 1});

                    // counter
                    
                    let countId = (+$(element).attr("data-count"));
                    let count = 0;

                    setTimeout(() => {
                        let go = setInterval(() => {
                            $(element).text(count)
                            count += Math.floor(countId/2)
                                if(element.innerHTML >= countId){
                                    clearInterval(go)
                                }
                            }, 150);
                        if(element.innerHTML >= countId){
                            clearInterval(go)
                        }
                    }, 500);


                }else{
                    $(element).addClass($(element).attr("data-type-anim"))
                    $(element).css({"animation-delay" : $(element).attr("data-delay")})
                }
            }

        })
    }

    $(window).on("scroll",function(){
        scroll()
    })
    
    $(window).load(function(){
        scroll()
    })

}
$(".setFade").each((i,tags)=>{
    tags.classList.add("fadeIn")
    tags.style.animationDelay = $(tags).attr("data-delay")
})