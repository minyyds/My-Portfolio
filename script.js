document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const nameElement = document.querySelector('.name');
    nameElement.appendChild(cursor);
});

function toggleTheme() {
    document.body.classList.toggle('light-mode');

    const moonIcon = document.querySelector('.moon-icon');
    const moonIconHover = document.querySelector(".theme-toggle")

    if (document.body.classList.contains('light-mode')) {
        moonIcon.classList.add('light-mode');
        moonIconHover.classList.add("light-mode");
    } else {
        moonIcon.classList.remove('light-mode');
        moonIconHover.classList.remove("light-mode");
    };
};
