import css from "../src/styles.css";




const content = document.querySelector('.content');
const headerNav = document.createElement('div');
headerNav.classList.add('header-nav');
const restaurantName = document.createElement('div');
const navButton = document.createElement('button');
const navButton2 = document.createElement('button');
const navButton3 = document.createElement('button');
restaurantName.classList.add('text');
restaurantName.textContent = 'Maillard'
navButton.classList.add('home-btn');
navButton.textContent = 'Home'
navButton2.classList.add('menu-btn');
navButton2.textContent = 'Menu'
navButton3.classList.add('about-btn');
navButton3.textContent = 'About'
content.appendChild(headerNav);
headerNav.appendChild(restaurantName)
headerNav.appendChild(navButton);
headerNav.appendChild(navButton2);
headerNav.appendChild(navButton3);



///home 

const home = document.createElement('div');
const homeText = document.createElement('div');
const homePic = document.createElement('div');
homePic.classList.add('right');
homeText.classList.add('left');
home.classList.add('home');

const line1 = document.createElement('span');
const line2 = document.createElement('span');
const line3 = document.createElement('span');
const line4 = document.createElement('span');
const line5 = document.createElement('span');


line1.textContent = 'The highest quality ingredients.';
line2.textContent = 'No seed oils. No margarine.';
line3.textContent = 'All fresh and natural.';
line4.textContent = 'Serving the best customers since 2309 B.C';
line5.textContent = 'Maillard!';

homeText.appendChild(line1);
homeText.appendChild(line2);
homeText.appendChild(line3);
homeText.appendChild(line4);
homeText.appendChild(line5);


home.appendChild(homeText);
home.appendChild(homePic);
content.appendChild(home);

///menu


//about