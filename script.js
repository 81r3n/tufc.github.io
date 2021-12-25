$(document).ready(function() {
    (function() {
        var doc = document.documentElement;
        var w = window;
        var prevScroll = w.scrollY || doc.scrollTop;
        var curScroll;
        var direction = 0;
        var prevDirection = 0;
        var header = document.getElementById('navigationBar');
        var checkScroll = function() {
            /*
             ** Find the direction of scroll
             ** 0 - initial, 1 - up, 2 - down
             */
            curScroll = w.scrollY || doc.scrollTop;
            if (curScroll > prevScroll) {
                //scrolled up
                direction = 2;
            } else if (curScroll < prevScroll) {
                //scrolled down
                direction = 1;
            }
            if (direction !== prevDirection) {
                toggleHeader(direction, curScroll);
            }
            prevScroll = curScroll;
        };
        var toggleHeader = function(direction, curScroll) {
            if (direction === 2 && curScroll > 87) {
                //replace 52 with the height of your header in px
                header.classList.add('hide');
                prevDirection = direction;
            } else if (direction === 1) {
                header.classList.remove('hide');
                prevDirection = direction;
            }
        };
        window.addEventListener('scroll', checkScroll);
    })();
    $('.owl-1').owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        smartSpeed: 4000,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 4
    });
    // loader animation
    var tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".loaderLogo", { scale: 1.05, opacity: 1, duration: 1 });
    tl.to(".loaderText", { opacity: 1, y: 0, duration: 1 }, "-=0.5");
    tl.to(".loader", { y: "-100%", duration: 0.5 }, "+=0.5");
    // for appear on scroll-up nav

});