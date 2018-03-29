$(document).ready(function() {
    $('.slider-one').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        dots: true
    });
    $(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true
    });

    $('.big-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow: '<i class="icon-arrow-left nav-prev"></i>',
        nextArrow: '<i class="icon-arrow-right nav-next"></i>',
        draggable: false
    });
// menu
    $('.mobile').bind('click', function() {
        $('.sidebar').addClass('menu--active');
    });
    $('.sidebar__close').bind('click', function() {
        $('.sidebar').removeClass('menu--active');
    });
// validation
    jQuery.validator.addMethod("emailMethod", function(value, element) {
        var pattern = /^\w+@[a-zA-Z_0-9]+?\.[a-zA-Z]{2,3}$/;
        return this.optional(element) || pattern.test(value);
    });
    $('.form').validate({
        rules: {
            email: {
                required: true,
                emailMethod: true
            }
        },
        messages: {
            name: "Please specify your name",
            email: {
                email: "Please enter a valid email address. (user@gmail.com)"
            }
        }
    });
// init popup
    $('.image__link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});
//init modal

$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});
// read more (services)
window.onload=function() {
    document.querySelector(".services__more-button").onclick=function() {
        document.querySelector(".services__more").classList.add("more--active");
        return false;
    };
    document.querySelector(".more__close").onclick=function() {
        document.querySelector(".services__more").classList.remove("more--active");
        return false;
    };
};



// scroll to
$('.menu__link').click(function() {
    var href = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1000);
    return false;
});