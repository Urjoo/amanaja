// JavaScript source code
window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    var parallaxContent = document.querySelector('.parallax-content');
    parallaxContent.style.transform = 'translateY(' + (scrolled * -0.3) + 'px)';
});
