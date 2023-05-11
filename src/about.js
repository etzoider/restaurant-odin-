

export default function goToAbout(parent, refresh) {
    refresh('about');

    const about = document.createElement('div');
    about.classList.add('about');

    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = "Since he started cooking at the young age of 3, Chef King John Unn had the dream of get together the most snobbish cooks and serve wannabe rich hipsters the most overpriced dishes available."
    
    const text2 = document.createElement('div');
    text2.classList.add('text2');
    text2.textContent = "That was the birth of Maillard"
    

    const contact = document.createElement('span');
    const icon1 = document.createElement('i');
    icon1.classList.add('fa-brands','fa-github');
    icon1.addEventListener('click', () => window.open("https://github.com/etzoider"))
    const icon2 = document.createElement('i');
    icon2.classList.add('fa-regular','fa-phone');
    const icon3 = document.createElement('i');
    icon3.classList.add('fa-regular','fa-envelope');
    const icon4 = document.createElement('i');
    icon4.classList.add('fa-brands','fa-whatsapp');
    contact.textContent = 'Contact us: '
    contact.appendChild(icon1);
    contact.appendChild(icon2);
    contact.appendChild(icon3);
    contact.appendChild(icon4);

    const image = document.createElement('img');
    image.src = 'src/images/about/king2.jpg'

    about.appendChild(text);
    about.appendChild(text2);
    about.appendChild(contact);
    about.appendChild(image);

    parent.appendChild(about);
}