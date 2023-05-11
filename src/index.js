import css from "../src/styles.css";
import goToHome from "../src/home.js";
import goToMenu from "../src/menu.js";
import goToAbout from "../src/about.js";

const refresh = (selectedTab) => {
    const toRemove = ['home', 'menu', 'about'];

    const ToCheck = content.querySelectorAll('*');
    ToCheck.forEach( dv => {
        if (toRemove.some(cls => dv.classList.contains(cls))) {
            dv.remove();
        }
    })

    const buttonClass = `${selectedTab}-btn`
    headerNav.querySelectorAll('button').forEach( btn => {
        if (btn.classList.contains('checked')) {
             btn.classList.remove('checked');
        }
        if (btn.classList.contains(buttonClass)) {
            btn.classList.add('checked');
        }
    })
}



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

navButton.addEventListener('click', () =>  goToHome(content, refresh));
navButton2.addEventListener('click', () => goToMenu(content, refresh));
navButton3.addEventListener('click', () =>  goToAbout(content, refresh));

goToHome(content, refresh);



//about