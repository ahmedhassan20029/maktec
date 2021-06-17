new WOW().init();
window.onload = function () { // start relowd page
    "use strict";
    // wow animation
    window.onscroll = function () {
        'use strict';
        // start function run
        if (document.scrollingElement.scrollTop <= 2900) {
            // start function run
            var num1 = document.querySelector('.run1'),
                num2 = document.querySelector('.run2'),
                num3 = document.querySelector('.run3'),
                num4 = document.querySelector('.run4');

            function anmatedCounter(element, start, end, duration) {
                var rang = end - start,
                    current = start,
                    increment = 0;
                if (end > start) {
                    increment = 1;
                } else {
                    increment = -1;
                }
                var timer = setInterval(function () {
                    current += increment;
                    element.textContent = current;
                    if (current == end) {
                        clearInterval(timer);
                    }
                }, duration);
            }
            anmatedCounter(num1, 1, 30, 300);
            anmatedCounter(num2, 1, 200, 30);
            anmatedCounter(num3, 1, 2500, .1);
            anmatedCounter(num4, 1, 15, 700);
            // end function run
        }
        /*
        if (document.scrollingElement.scrollTop >= 20) {
            document.querySelector('nav').classList.remove('abs');
            document.querySelector('nav').classList.add('scrot');
            document.getElementById('test').style.color = 'black!important';

        } else {
            document.querySelector('nav').classList.add('abs');
            document.querySelector('nav').classList.remove('scrot');
            document.getElementById('test').style.color = '#fff!important';
        }
        */

    };

    new Splide('.splide', {
        type: 'loop',
        autoWidth: true,
        focus: 'center',
    }).mount();
}; // close relowd page
document.querySelector('body .test').onmouseenter = function () {
    document.querySelector('body .test i').classList.add('fa-spin');
}
document.querySelector('body .test').onmouseleave = function () {
    document.querySelector('body .test i').classList.remove('fa-spin');
}