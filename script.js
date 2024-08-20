document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    setTimeout(() => {
        intro.classList.add('active');
    }, 500);
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500); // Adjust the timing as needed
});
