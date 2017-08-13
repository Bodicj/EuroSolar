$('.carousel').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 900,
        settings: {slidesToShow: 2,}
    }]
});