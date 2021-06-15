window.onload = function () { // start relowd page
    "use strict";
    // wow animation
    new WOW().init();

    window.onscroll = function () {
        'use strict';
        if (document.scrollingElement.scrollTop >= 20) {
            document.querySelector('nav').style.position = 'fixed';
            document.querySelector('nav').style.zIndex = '999999999999';
            document.querySelector('nav').style.marginTop = '-59px';
            document.querySelector('nav').style.width = '100%';
            document.querySelector('nav').style.borderBottom = '2px solid #333';
        } else {
            document.querySelector('nav').style.position = 'static';
            document.querySelector('nav').style.marginTop = '';
        }
        // start function run
        if (document.scrollingElement.scrollTop <= 2900) {
            // start function run
            var num1 = document.getElementById('run1'),
                num2 = document.getElementById('run2'),
                num3 = document.getElementById('run3'),
                num4 = document.getElementById('run4');

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
            anmatedCounter(num1, 1, 100, 10);
            anmatedCounter(num2, 1, 100, 10);
            anmatedCounter(num3, 1, 100, 10);
            anmatedCounter(num4, 1, 100, 10);
            // end function run
        }
    };
    new Splide('.splide', {
        type: 'loop',
        autoWidth: true,
        focus: 'center',
    }).mount();
}; // close relowd page