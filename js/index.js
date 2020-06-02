//Your code goes here
//All Webpages should be in Night Mode
//I recognize that I kind of relied on mouseenter for this assignment, I tried other events in its place but they all felt clunky for the purposes of styling the entire page and at some point my objective became "make the page night mode" instead of "use unique selectors".
//The solution would be to use 'load' maybe, but for some reason this selector never worked for me, maybe because Im running this file locally in my browser and not hosted on a server, who knows

//Should I be declaring these with the event listeners or is it fine to have them in their own seperate "section"? Does it even matter?
let logoText = document.querySelector('.logo-heading');
// let navLinks = document.querySelectorAll('a');
let navCont = document.querySelector('.nav-container');
let mainNav = document.querySelector('.main-navigation');
let bus = document.querySelector('.intro > img');
let bod = document.querySelector('body');
let h2s = document.querySelectorAll('h2');
let h4s = document.querySelectorAll('h4');
let textCont = document.querySelectorAll(".text-content");
let parag = document.querySelectorAll('p');
let button = document.querySelectorAll('.btn');
let bottomText = document.querySelector('.footer');
// let nav = document.querySelector('nav');
let intro = document.querySelector('.intro');

logoText.addEventListener('mouseenter', (event) => {event.target.textContent = 'Fun Bus Dark Mode'});

// nav.addEventListener('click', (event) => {event.target.style.border = "3px solid red"});

// for (let i = 0; i < navLinks.length; i++){
//     navLinks[i].addEventListener('click', (event) => {event.preventDefault(), event.target.style.color = orange}); //I cant tell if this prevent Default is actually working because my nav buttons never refreshed the page in the first place
// }

logoText.addEventListener('mouseenter', (event) => {event.target.style.color = orange});

mainNav.addEventListener('mouseenter', (event) => {event.target.style.background = blue}); //My favorite color, great for dark themes

bus.addEventListener('mouseenter', (event) => {event.target.src = "https://i.imgur.com/Oozhjnk.jpg"});

bod.addEventListener('mouseenter', (event) => {event.target.style.background = eigengrau});

for (let i = 0; i < h2s.length; i++){
    h2s[i].addEventListener('mouseenter', (event) => {event.target.style.color = orange});
};

for (let i = 0; i < h4s.length; i++){
    h4s[i].addEventListener('mouseenter', (event) => {event.target.style.color = orange});
};

for (let i = 0; i < parag.length; i++){
    parag[i].addEventListener('mouseenter', (event) => {event.target.style.color = gray});
};

for (let i = 0; i < button.length; i++){
    button[i].addEventListener('mouseenter', (event) => {event.target.style.background = gray, event.target.style.border=`1px solid ${orange}`, event.target.style.color=orange});
};
//I abused these for loops lmao, would it be better to use a function or another method for this or are for loops fine?

bottomText.addEventListener('mouseenter', (event) => {event.target.style.background = blue});

//Below is specifically to use stopPropagation()
//And is ugly and will be commented out because its ugly but works
let navLinks = document.querySelectorAll('a');
for (let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', (event) => {event.stopPropagation(), event.preventDefault(), event.target.style.color = orange, event.target.style.border = "3px solid red"});
};

let nav = document.querySelector('nav');
nav.addEventListener('click', (event) => {event.target.style.border = "3px solid white"});


//Color Handlers, is there a better way to do this?
const orange = '#DBA901'
const eigengrau = '#16161d'
const blue = '#0E0C23'
const gray = '#696969'

//Trying to add non-pressing questions to my assignments in comments so I can keep track of things Im wondering, these are more directed at myself so I know what to study next than any future reviewers 
