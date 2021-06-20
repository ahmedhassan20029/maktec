// start wow animation
new WOW().init();
// end wow animation
// start relowd page
window.onload = function () {
    "use strict";
    // start splide
    new Splide('.splide', {
        type: 'loop',
        autoWidth: true,
        focus: 'center',
    }).mount();
    // end splide
    // start function scroll
    window.onscroll = function () {
        'use strict';

        // start function nav
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
        // end function nav
        // start function run
        var Nar = document.getElementsByClassName('nar')[0];

        if (Nar.hasAttribute('id')) {
            if (document.scrollingElement.scrollTop >= 3000) {
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
                anmatedCounter(num1, 1, 30, 300);
                anmatedCounter(num2, 1, 200, 50);
                anmatedCounter(num3, 1, 2500, 0.1);
                anmatedCounter(num4, 1, 15, 700);
            }
            if (document.scrollingElement.scrollTop >= 3000) {
                Nar.removeAttribute('id');
            }
        } // close function run

        // start function typing
        var typer = document.getElementsByClassName('typer')[0];
        if (typer.hasAttribute('id')) {
            if (document.scrollingElement.scrollTop >= 1100) {
                var typing = document.getElementById('typing'),
                    text = 'ماك تك شركة مصرية 100% تعمل فى كافة خدمات تصميم وتطوير المواقع الألكترونيه على شبكة الانترنت منها خدمات الملتيميديا بكافة انواعها وخدمات التصميم والجرافكس والانيميشن وخدمات الطباعة بكافة انواعها وإقامة الحملات الاعلانيه  والانتخابيه  والتسويقيه والتسويق الالكترونى والعديد من الخدمات التى تميزنا بتقديمها للكثير من العملاء وحازلت على اعجابهم.',
                    i = 0;
                var typeWriter = window.setInterval(function () {
                    typing.textContent += text[i];
                    i = i + 1;
                    if (i > text.length - 1) {
                        window.clearInterval(typeWriter);
                    }
                }, 30);
            }
            if (document.scrollingElement.scrollTop >= 1100) {
                typer.removeAttribute('id');
            }
        } // close function typing
        // start function scroll top
        if (document.scrollingElement.scrollTop >= 4000) {
            document.getElementById('topscroll').style.display = 'block';
            document.getElementById('topscroll').onclick = function () {
                document.scrollingElement.scrollTop = 0;
            }
        } else if (document.scrollingElement.scrollTop <= 4000) {
            document.getElementById('topscroll').style.display = 'none';
        }
        // end function scroll top
    }; // end close onscroll
}; // close relowd page