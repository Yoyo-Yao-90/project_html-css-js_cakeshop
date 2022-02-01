window.addEventListener('load', function () {
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var wrap = document.querySelector('.wrap');


    wrap.addEventListener('mouseenter', function () {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    wrap.addEventListener('mouseleave', function () {
        left.style.display = 'none';
        right.style.display = 'none';
        timer = setInterval(function () {
            right.click();
        }, 3000);
    })

    var ul = wrap.querySelector('ul');
    var ol = wrap.querySelector('ol');
    var wrapWidth = wrap.offsetWidth;
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);
        li.addEventListener('mouseover', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'on';

            var index = this.getAttribute('index');
            num = index;
            circle = index;

            animate(ul, -index * wrapWidth);
        })

    }

    ol.children[0].className = 'on';

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    var num = 0;
    var circle = 0;
    var flag = true;
    right.addEventListener('click', function () {
        if (flag) {
            flag = false;

            if (num == ol.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * wrapWidth, function () {
                flag = true;
            });

            circle++;

            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }

    });


    left.addEventListener('click', function () {
        if (flag) {
            flag = false;

            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * wrapWidth + 'px';
            }
            num--;
            animate(ul, -num * wrapWidth, function () {
                flag = true;
            });

            circle--;
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();
        }

    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'on';
    }


    var timer = setInterval(function () {
        right.click();
    }, 2000);

})