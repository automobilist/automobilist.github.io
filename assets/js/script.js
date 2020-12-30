$(function(){
var header = $("#header"),
     introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    /*fixed header*/
        checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        
       scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        
        
});
    function checkScroll(scrollOffset){
        if(scrollOffset >= introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }
    
    /*smooth scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
                 var $this = $(this),
                 blockId = $this.data('scroll'),
                 blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
            $("html, body").animate({
                scrollTop: blockOffset
            },500);
        $("#about").addClass("active");
        $("#course").addClass("active");
        $("#questions").addClass("active");
        $("#reviews").addClass("active");
        $("#geo").addClass("active");
        $("#footer").addClass("active");
        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
                

            
    });
    /*nav toggle*/
    $("#nav_toggle").on('click', function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        
    });
     /*slider*/
    $("[data-slider]").slick({
       
        autoplay: true,
        autoplaySpeed: 2000,
       infinitive: true,
        fade:false,
        slidesToShow:3,
        slidesToScroll:1,
         responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    $("[data-sliderreview]").slick({
        autoplay: true,
        autoplaySpeed: 2000,
       infinitive: true,
        fade:false,
        slidesToShow:1,
        slidesToScroll:1
        
    });
      /*collapse accordion*/
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();
        
        var $this = $(this),
            blockId = $this.data('collapse');
        
        $this.toggleClass("active");
        
    });
});