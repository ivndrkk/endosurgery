document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel').mount();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});
