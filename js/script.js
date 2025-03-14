// 1. Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close navbar when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// 2. Dark/Light Theme Toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}
toggleSwitch.addEventListener('change', switchTheme, false);

// Load user’s theme preference
const currentTheme = localStorage.getItem('theme') || null;
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

// 3. Dynamic Year in Footer
const myDate = document.querySelector('#datee');
const thisYear = new Date().getFullYear();
if (myDate) myDate.textContent = thisYear;

// 4. Typed Text Effect
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

// Change these texts as you like
const textArray = [
  "a Web Developer",
  "an Aspiring Full-Stack Engineer",
  "a Photography Enthusiast",
  "a Cricket Lover"
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1200; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (!typedTextSpan) return;
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (!typedTextSpan) return;
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay);
  }
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", () => {
  if (typedTextSpan) type();
});
