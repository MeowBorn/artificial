$(document).ready(function () {


    $(".slider").owlCarousel({});


    $(".owl-carousel").owlCarousel({
        items: 3,
        dotsEach: true,
        autoplay: true,
        smartSpeed: 900,
        rewind: true,
        autoplayHoverPause: true,
        loop: true,
        responsiveClass: true,
        responsive:{

            0: {
                items: 1,
            },

            540: {
                items: 2,
            },

            768: {
                items: 3,
            },

        }


    });














$('.select').change(function(){
		window.location.href = $(this).val();
	});








$('select').niceSelect();

    $('.header__burger').click(function (){
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock');
    });





});