$(function() {
    const $menu = $('#header__menu');
    const $menuLink = $('#header__menu>li>a');
    const $bar = $('#header__underline');
    const $active = $('.header__menu--active>a');
    const leftActive = $active.position().left -25;
    const topActive = $active.position().top + 45;
    const widthActive = $active.width() + 50;
    const $textMargin = $('.slider__textfield>p');

    $textMargin.css({'margin-left': $menu.position().left + 33 + 'px'});
    
    const moveBar = (l, t, w) => {
        $bar.css({
            'left': l + 'px',
            'top': t + 'px',
            'width': w + 'px'
        });
    };

    moveBar(leftActive, topActive, widthActive);

    $menuLink.on('mouseover', function () {
        const left = $(this).position().left -25;
        const top = $(this).position().top + 45;
        const width = $(this).width() + 50;

        moveBar(left, top, width)
    });

    $bar.on('mouseover', function () {
       moveBar(leftActive, topActive, widthActive);
    });

    $menu.on('mouseleave', function () {
        moveBar(leftActive, topActive, widthActive);
    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        mouseDrag: false,
        dots: false
    });
});