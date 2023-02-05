const h1 = document.querySelector('h1');
const p = document.querySelector('p'); // selecciona al primero que encuentra
const ps = document.querySelectorAll('p'); // selecciona a todos los p y devuelve un array
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('btbCalcular');

console.log({
    h1,p,parrafito,pid,input1
});

console.log(ps);
h1.innerHTML = 'Primera <br> prueba';
//h1.textContent = "cualquier cosa <br>";
console.log("titulotote es: "+h1.getAttribute('titulotote'));
h1.setAttribute('titulotote','tit');
console.log("titulototes cambiado es: "+h1.getAttribute('titulotote'));
h1.classList.add('titulitito');
console.log(h1.getAttribute('class'));
h1.classList.remove('titulitito');

//crear un node desde js:
const img = document.createElement('img');
img.setAttribute('src', 'https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png');
console.log(img);
pid.append(img);

//// calculos

const cal1 = document.querySelector('#calculo1');
const cal2 = document.querySelector('#calculo2');
const hacercal = document.querySelector('#btnCalcular');
hacercal.addEventListener('click',btnOnClick);



function btnOnClick(){
    const resultado = document.getElementById('result');
    resultado.innerText = parseInt(cal1.value)  + parseInt(cal2.value);
}