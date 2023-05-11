

export default function goToMenu(content, refresh) {
refresh('menu');
const menu = document.createElement('div');
menu.classList.add('menu');
const menuItems = document.createElement('div');
menuItems.classList.add('menu-items');
const menuButtons = document.createElement('div');
menuButtons.classList.add('menu-buttons');

const menuItem1 = document.createElement('div');
const menuItemText1 = document.createElement('h1');
const menuItemDescription1 = document.createElement('span');
const menuItemImage1 = document.createElement('img');

const menuItem2 = document.createElement('div');
const menuItemText2 = document.createElement('h1');
const menuItemDescription2 = document.createElement('span');
const menuItemImage2 = document.createElement('img');

const menuItem3 = document.createElement('div');
const menuItemText3 = document.createElement('h1');
const menuItemDescription3 = document.createElement('span');
const menuItemImage3 = document.createElement('img');


menuItem1.appendChild(menuItemText1);
menuItem1.appendChild(menuItemDescription1);
menuItem1.appendChild(menuItemImage1);

menuItem2.appendChild(menuItemText2);
menuItem2.appendChild(menuItemDescription2);
menuItem2.appendChild(menuItemImage2);

menuItem3.appendChild(menuItemText3);
menuItem3.appendChild(menuItemDescription3);
menuItem3.appendChild(menuItemImage3);

menuItem1.classList.add('menu-item');
menuItem2.classList.add('menu-item');
menuItem3.classList.add('menu-item');


menuItems.appendChild(menuItem1);
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
button2.classList.add('drinks-btn');
button3.classList.add('desserts-btn');
button1.appendChild(mealIcon);
button2.appendChild(drinksIcon);
button3.appendChild(dessertsIcon);
button1.addEventListener('click', () => foodMenu());
button2.addEventListener('click', () => drinkMenu());
button3.addEventListener('click', () => dessertMenu());

menuButtons.appendChild(button1);
menuButtons.appendChild(button2);
menuButtons.appendChild(button3);

menu.appendChild(menuButtons);

function resetMenu() {
    menuItemText1.textContent = '';
    menuItemDescription1.textContent = '.'
    menuItemImage1.src = ''

    menuItemText2.textContent = '';
    menuItemDescription2.textContent = ''
    menuItemImage2.src = ''

    menuItemText3.textContent = '';
    menuItemDescription3.textContent = ''
    menuItemImage3.src = ''
    menuButtons.childNodes.forEach(button => {
        if (button.classList.contains('checked')) {
            button.classList.remove('checked');
        }
    })
}

function foodMenu() {
    resetMenu();
    menuItemText1.textContent = 'Steak and chips $92';
    menuItemDescription1.textContent = 'The matrix will tell your brain this is juicy and delicious.'
    menuItemImage1.src = 'src/images/menu-food/steak2.jpg'

    menuItemText2.textContent = 'Spaghetinni a la bambini $58';
    menuItemDescription2.textContent = 'If "I spent a lot but Im still hungry" was a dish'
    menuItemImage2.src = 'src/images/menu-food/pasta.jpg'

    menuItemText3.textContent = 'Fino burger $44';
    menuItemDescription3.textContent = 'Ground cow, fermented lactose, and a bunch of vegetation.'
    menuItemImage3.src = 'src/images/menu-food/burguer.jpg'

    
    button1.classList.add('checked');
}
function drinkMenu() {
    resetMenu();
    menuItemText1.textContent = 'Manly drink $22';
    menuItemDescription1.textContent = 'Be a cowboy with none of the dangerous downsides.'
    menuItemImage1.src = 'src/images/menu-drink/drink1.jpg'

    menuItemText2.textContent = 'Soda lemonade $16';
    menuItemDescription2.textContent = 'Pay 16 times more for soda(lemons are expensive)'
    menuItemImage2.src = 'src/images/menu-drink/drink2.jpg'

    menuItemText3.textContent = 'Iced latte $18';
    menuItemDescription3.textContent = 'Feeling like a hipster, huh?'
    menuItemImage3.src = 'src/images/menu-drink/drink3.jpg'

    
    button2.classList.add('checked');
}
function dessertMenu() {
    resetMenu();
    menuItemText1.textContent = 'Stroppelwafflellalingong $48';
    menuItemDescription1.textContent = "Schwarzonegger's favorite dessert"
    menuItemImage1.src = 'src/images/menu-dessert/dessert1.jpg'

    menuItemText2.textContent = 'Diabetus shake $28';
    menuItemDescription2.textContent = "Sweet liquid energy. Who doesn't like injecting insulin, anyways?"
    menuItemImage2.src = 'src/images/menu-dessert/dessert2.jpg'

    menuItemText3.textContent = 'Fino pudding $32';
    menuItemDescription3.textContent = 'Simple. Delicious. Satisfying. Overpriced.'
    menuItemImage3.src = 'src/images/menu-dessert/dessert3.jpg'

    
    button3.classList.add('checked');
}

foodMenu();

content.appendChild(menu);

}