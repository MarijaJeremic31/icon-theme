$(document).ready(function () {
    
    //ANIMATE SCROLL
    $('.navbar-nav a, .landing .container > a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });
//ANIMATE HEADER
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('header').addClass('py-2');
            $('header').css('background-color', 'rgba(0,0,0,0.8)');
            $('.navbar-brand').addClass('small-logo');
        } else {
            $('header').removeClass('py-2');
            $('.navbar-brand').removeClass('small-logo');
            $('header').css('background-color', 'rgba(0,0,0,0.3)');
        }
    });

//ROUND SLIDER FOR PERCENT

    $(window).scroll(function () {
        percent();
    });
    percent();

    function percent() {
        var vh = $(window).height();
        var scroll = $(window).scrollTop();

        $('.cont').each(function () {
            var position = $(this).offset().top;

            if (position < vh + scroll - 100) {
                var val = parseInt($(this).attr('data-pct'));
                var $circle = $(this).find('.svg .bar');

                var r = $circle.attr('r');
                var c = Math.PI * (r * 2);

                var pct = ((100 - val) / 100) * c;
                $circle.css({strokeDashoffset: pct});

            }


            //$('.cont').attr('data-pct',val);

        });
    }

//TEAM SLIDER
    if ($('.owl-carousel').length > 0) {
        $('.team').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            navText: ['<', '>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }

            }
        });

    }
    
    //STAR RATING
    $('.example-fontawesome-o').each(function () {
        var currentRating = $(this).data('current-rating');

        $(this).find('.current-rating')
                .find('span')
                .html(currentRating);

        $(this).find(' .clear-rating').on('click', function (event) {
            event.preventDefault();

            $(this)
                    .barrating('clear');
        });
        $(this).barrating({
            theme: 'fontawesome-stars-o',
            showSelectedRating: false,
            initialRating: currentRating,
            onSelect: function (value, text) {
                if (!value) {
                    $(this)
                            .barrating('clear');
                } else {
                    $(this).find(' .current-rating')
                            .addClass('hidden');

                    $(this).find(' .your-rating')
                            .removeClass('hidden')
                            .find('span')
                            .html(value);
                }
            },
            onClear: function (value, text) {
                $(this).find('.stars-example-fontawesome-o')
                        .find('.current-rating')
                        .removeClass('hidden')
                        .end()
                        .find('.your-rating')
                        .addClass('hidden');
            }
        });
    });


});