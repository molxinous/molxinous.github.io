document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    setTimeout(() => {
        intro.classList.add('active');
    }, 500);
});
