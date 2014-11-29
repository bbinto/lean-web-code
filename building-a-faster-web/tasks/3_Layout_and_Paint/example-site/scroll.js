$(function() {

    console.log('THUNDERCATS ARE GO!');

    var $cats = $('.cat');
    var $nav = $('#navbar')

    $(window).scroll(function(e) {
        var offset = $(document.body).scrollTop() + $nav.height() / 2;
        $nav.css('top', offset);
    });

    function animateCats() {
        $cats.each(function(i) {
            var top = this.offsetTop;
            this.style.padding = (top + Math.random() * 1) + 'px';
        });
    }

    $(window).scroll(function() {
        animateCats();
    });

});
