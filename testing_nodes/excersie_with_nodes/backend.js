//select a html element
const h1 = document.querySelector('#main');    
//create a node 
const p = document.createElement('p');
//add text to a html element
p.textContent = 'Hey Im red!';
//append a node to other node
h1.appendChild(p);
//give css properties to a node
p.style.cssText = 'color:red;';

const h3 = document.createElement('h3');
h3.textContent = 'Im a blue!';
h1.appendChild(h3);
h3.style.cssText = 'color:blue;';

const div = document.createElement('div');
//other way to set properties to a node
div.style.setProperty('border-color','black');
div.style.setProperty('background-color','grey');
h1.appendChild(div);

const h1_2 = document.createElement('h1');
h1_2.textContent = 'I’m in a div';
div.appendChild(h1_2);

const p_2 = document.createElement('p');
p_2.textContent = 'me too';
div.appendChild(p_2);

//funciones que usan los botones
let papufunciton = () => {console.log('si funciona wtfff')}

const button = document.querySelector('#boton');
button.addEventListener('click',papufunciton);

let  wapofunction = () => {console.log('xd');alert('sos muy sexi')};

//funcion e 
const buttone = document.querySelector('#bottone');
buttone.addEventListener('click',(e) => {console.log(e.target.style.background = 'blue')});

//iterate in a node list
const botones = document.querySelectorAll('button');

let varios_botones = (e) =>{console.log(e)};

let varios_botones_db = (e) =>{console.log('double click')};

botones.forEach((boton)=>{
    //m dom methods https://www.w3schools.com/jsref/dom_obj_event.asp
    boton.addEventListener('dblclick',varios_botones_db);
    boton.addEventListener('click',varios_botones);
});