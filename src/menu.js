

export default function goToMenu(parent) {
    console.log('1');
    if (parent.childNodes.includes('home')) {
        parent.childNodes.remove('home');
    }
    console.log('2');
}