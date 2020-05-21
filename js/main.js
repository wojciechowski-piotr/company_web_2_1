const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close-icon');
const logo = document.querySelector('.logo');
const bodyCnt = document.querySelector('body');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    bodyCnt.classList.toggle('hide');
});
closeIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    bodyCnt.classList.toggle('hide');
});

const dropSubLinks = document.querySelectorAll('.drop-sub-links');
const subLinks = document.querySelectorAll('.sub-links');

dropSubLinks[0].addEventListener('click', () => {
    subLinks[0].classList.toggle('show');
});
dropSubLinks[1].addEventListener('click', () => {
    subLinks[1].classList.toggle('show');
});

