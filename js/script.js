document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const nameElement = document.querySelector('.name');
    nameElement.appendChild(cursor);
});

function toggleTheme() {
    document.body.classList.toggle('light-mode');

    const moonIcon = document.querySelector('.moon-icon');
    const moonIconHover = document.querySelector(".theme-toggle")
    const letsGo = document.querySelector(".proceed")

    if (document.body.classList.contains('light-mode')) {
        moonIcon.classList.add('light-mode');
        moonIconHover.classList.add("light-mode");
        letsGo.classList.add("light-mode")
    } else {
        moonIcon.classList.remove('light-mode');
        moonIconHover.classList.remove("light-mode");
        letsGo.classList.remove("light-mode")
    };
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector(".name").onmouseover = event => {
    let iterations = 0

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations) {
            return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

    if(iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
    }
    iterations += 1 / 3;

}, 30)
}