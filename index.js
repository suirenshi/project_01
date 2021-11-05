window.addEventListener('load', function () {
    var btn = document.querySelector('#btn');
    var box = document.querySelector('#box');

    btn.addEventListener('click', function () {
        box.classList.add('current');
    });
});