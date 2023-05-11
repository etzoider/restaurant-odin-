import css from "../src/styles.css";
import goToHome from "../src/home.js";
import goToMenu from "../src/menu.js";
import goToAbout from "../src/about.js";


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
navButton.addEventListener('click', () => goToHome(content));

navButton2.classList.add('menu-btn');
navButton2.textContent = 'Menu'
navButton2.addEventListener('click', () => goToMenu(content));

navButton3.classList.add('about-btn');
navButton3.textContent = 'About'
navButton3.addEventListener('click', () => goToAbout(content));

content.appendChild(headerNav);
headerNav.appendChild(restaurantName)
headerNav.appendChild(navButton);
headerNav.appendChild(navButton2);
headerNav.appendChild(navButton3);

///menu

const menu = document.createElement('div');
menu.classList.add('menu');

const menuItems = document.createElement('div');
menuItems.classList.add('menu-items');

const menuButtons = document.createElement('div');
menuButtons.classList.add('menu-buttons');

const menuItem = document.createElement('div');
const menuItemText1 = document.createElement('h1');
menuItemText1.textContent = 'NAME OF FOOD';
const menuItemDescription1 = document.createElement('span');
menuItemDescription1.textContent = 'ITEM DESCRIPTION BLABLABLALBALBA'
const menuItemImage1 = document.createElement('img');
menuItemImage1.src = 'src/images/menu-food/steakAndPotatoes.jpg'
menuItem.appendChild(menuItemText1);
menuItem.appendChild(menuItemDescription1);
menuItem.appendChild(menuItemImage1);

const menuItem2 = document.createElement('div');
const menuItemText2 = document.createElement('h1');
const menuItemDescription2 = document.createElement('span');
const menuItemImage2 = document.createElement('img');

const menuItem3 = document.createElement('div');
const menuItemText3 = document.createElement('h1');
const menuItemDescription3 = document.createElement('span');
const menuItemImage3 = document.createElement('img');

menuItem.classList.add('menu-item');
menuItem2.classList.add('menu-item');
menuItem3.classList.add('menu-item');
menuItems.appendChild(menuItem);
menuItems.appendChild(menuItem2);
menuItems.appendChild(menuItem3);




menu.appendChild(menuItems);

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const mealIcon = document.createElement('i');
const drinksIcon = document.createElement('i');
const dessertsIcon = document.createElement('i');

mealIcon.classList.add('fas','fa-utensils');
drinksIcon.classList.add('fas','fa-glass-martini-alt')
dessertsIcon.classList.add('fas','fa-ice-cream')

button1.classList.add('meal-btn');
button1.appendChild(mealIcon);
button2.classList.add('drinks-btn');
button2.appendChild(drinksIcon);
button3.classList.add('desserts-btn');
button3.appendChild(dessertsIcon);

button3.classList.add('desserts-btn');
menuButtons.appendChild(button1);
menuButtons.appendChild(button2);
menuButtons.appendChild(button3);

menu.appendChild(menuButtons);

content.appendChild(menu);

//about