// Creo un array di titoli
const titleList = ['img/repubblica.svg', 'img/giornale.svg', 'img/gazzetta.svg', 'img/post.svg', 'img/open.svg'];
const linkList = [
    'https://www.repubblica.it/', 
    'https://www.ilgiornale.it/', 
    'https://www.gazzetta.it/', 
    'https://www.ilpost.it/', 
    'https://www.open.online/'
];

// Creo un array di paragrafi
const textList = [
    '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi reprehenderit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi...\"', 
    '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisiLorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi...\"', 
    '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, impedit voluptatum deleniti vitae consequuntur, natus non nisiLorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisiLorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi...\"', 
    '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi obcaecati...\"', 
    '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi...\"'
];

// creo un array di immagini
const imageList = ['img/aereo.jpg', 'img/case.jpg', 'img/pallone.jpg', 'img/eco.jpg', 'img/cellulare.jpg'];

// creo una variabile currentIndex con valore 0
let currentIndex = 0;

// creo le variabili per titoli, paragrafi, immagini e button
const logo = document.getElementById('logo');
const text = document.getElementById('text');
const image = document.getElementById('image');
const buttonBefore = document.getElementById('button-before');
const buttonAfter = document.getElementById('button-after');
const link = document.getElementById('link');
const box = document.querySelector('.box');

// attribuisco il correntIndex alle variabili di titolo e paragrafo
logo.src = titleList[currentIndex];
text.innerHTML = textList[currentIndex];
image.src = imageList[currentIndex];
link.href = linkList[currentIndex];

// creo un evento al click dei button:
// buttonAfter con currentIndex++ (per incrementare il numero e scorrere in avanti la lista) a cui indico che SE supera la fine deve ricominciare dall'inizio della lista;
buttonAfter.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex > titleList.length -1) {
        currentIndex = 0; 
    }
    if (currentIndex > textList.length -1) {
        currentIndex = 0;
    }
    if (currentIndex > imageList.length -1) {
        currentIndex = 0;
    }
    if (currentIndex > linkList.length -1) {
        currentIndex = 0;
    }
    if (currentIndex === 2) {
        box.style.backgroundColor = '#f4dbdf';
    }else {
        box.style.backgroundColor = '#fff';
    }
    logo.src = titleList[currentIndex];
    text.innerHTML = textList[currentIndex];
    image.src = imageList[currentIndex];
    link.href = linkList[currentIndex];
})



// creo un evento al click dei button:
// buttonBefore con currentIndex-- (per decrementare il numero e scorrere indietro la lista) a cui indico che SE supera lo "zero" deve ricominciare dalla fine della lista.
buttonBefore.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = titleList.length -1; 
    }
    if (currentIndex < 0) {
        currentIndex = textList.length -1;
    }
    if (currentIndex < 0) {
        currentIndex = imageList.length -1;
    }
    if (currentIndex < 0) {
        currentIndex = linkList.length -1;
    }
    if (currentIndex === 2) {
        box.style.backgroundColor = '#f4dbdf';
    }else {
        box.style.backgroundColor = '#fff';
    }
    logo.src = titleList[currentIndex];
    text.innerHTML = textList[currentIndex];
    image.src = imageList[currentIndex];
    link.href = linkList[currentIndex];
})





