// particles
particlesJS("particles-js", {
particles: {
number: { value: 60 },
size: { value: 3 },
color: { value: "#38bdf8" },
line_linked: { enable: true, color: "#38bdf8" },
move: { speed: 2 }
}
});

// AOS
AOS.init({
duration: 1000,
once: true
});

// typing
const texts = [
"Hi, I'm Vikas 👋",
"Frontend Developer 💻",
"JavaScript Developer ⚡"
];

let i = 0;
let j = 0;
let isDeleting = false;

function typing() {
const element = document.getElementById("typing");
const current = texts[i];

if (!isDeleting) {
element.innerHTML = current.substring(0, j++);
} else {
element.innerHTML = current.substring(0, j--);
}

let speed = isDeleting ? 50 : 100;

if (!isDeleting && j === current.length) {
speed = 1500;
isDeleting = true;
} else if (isDeleting && j === 0) {
isDeleting = false;
i = (i + 1) % texts.length;
}

setTimeout(typing, speed);
}

typing();

// scroll progress bar
const progress = document.createElement("div");
progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#38bdf8";
progress.style.zIndex = "999";
document.body.appendChild(progress);

window.addEventListener("scroll", () => {
let scroll = window.scrollY;
let height = document.body.scrollHeight - window.innerHeight;
progress.style.width = (scroll / height) * 100 + "%";
});