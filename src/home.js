


export default function goToHome(parent, refresh) {
    refresh('home');
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
    line4.textContent = 'Serving the best customers since a bunch of time ago.';
    line5.textContent = 'Maillard!';

    homeText.appendChild(line1);
    homeText.appendChild(line2);
    homeText.appendChild(line3);
    homeText.appendChild(line4);
    homeText.appendChild(line5);


    home.appendChild(homeText);
    home.appendChild(homePic);

    parent.appendChild(home)
}