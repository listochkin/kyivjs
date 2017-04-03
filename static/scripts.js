'use strict';

(function() {
    /**
     * scrollToTop
     */
    document.getElementById('scrollToTop')
        .addEventListener('click', function(){
            console.log('click');
            var e = document.documentElement;
            if (e.scrollTop===0) {
                var t = e.scrollTop;
                ++e.scrollTop;
                e = t+1===e.scrollTop--?e:document.body;
            }
            scrollTo(e, 0, 500);  
        }, false);


    function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
            
        var animateScroll = function(){        
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    function easeInOutQuad (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };
})();