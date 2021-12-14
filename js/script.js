// Creo un array di titoli
const titleList = ['La Repubblica', 'Il Giornale', 'La Gazzetta dello Sport', 'Il Post', 'Open'];

// Creo un array di paragrafi
const textList = [
    '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi reprehenderit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi...\"', 
    '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisiLorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi...\"', 
    '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisiLorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisiLorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi...\"', 
    '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi obcaecati...\"', 
    '\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisiLorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisiLorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ex accusamus soluta officia dignissimos autem odio, architecto obcaecati et amet quasi impedit voluptatum deleniti vitae consequuntur, natus non nisi...\"'
];

// creo una variabile currentIndex con valore 0
let currentIndex = 0;

// creo le variabili per titoli, paragrafi e button
const title = document.getElementById('title');
const text = document.getElementById('text');
const buttonBefore = document.getElementById('button-before');
const buttonAfter = document.getElementById('button-after');

// attribuisco il correntIndex alle variabili di titolo e paragrafo
title.innerHTML = titleList[currentIndex];
text.innerHTML = textList[currentIndex];

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
    title.innerHTML = titleList[currentIndex];
    text.innerHTML = textList[currentIndex];
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
    title.innerHTML = titleList[currentIndex];
    text.innerHTML = textList[currentIndex];
})