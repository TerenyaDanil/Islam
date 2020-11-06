$('.header__dop').click(function() {
    $('.header__dop').toggleClass('active');
    $('.header__more').toggleClass('active');
});

$(".header__nav, .header__btn").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
});


let plus = document.querySelectorAll('.wrap-program__plus');

plus.forEach(function(el) {
    $(el).click(function() {
        $(el).toggleClass('active');
        $(el).parent().parent().toggleClass('active');
    })
});

if ($('.my-slider').length > 0) {
    $('.my-slider').slick({
        centerMode: true,
        //autoplay: true,
        //infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        speed: 500,
        cssEase: 'ease',
        swipe: false,
        swipeToSlide: false,
        infinite: true,
        //asNavFor:'',
        //appendDots:
        //appendArrows:$('.mainslider-arrows .container'),
        nextArrow: '.slider__next',
        prevArrow: '.slider__prev',
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                swipe: true,
            }
        }]
    });
}