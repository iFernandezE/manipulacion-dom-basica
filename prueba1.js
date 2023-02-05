let name = "Ivan";
let lastName = "Fernandez"
console.log(name);
let sumaStrings = "hola,"+` super ${name}`;
console.log(sumaStrings);
function nombreCompleto(nombre ,apellido){
    return `${name} ${lastName}`;
}
console.log(nombreCompleto("jorge","luis"));
let i =1;

while (i<5){
    
    console.log("Hola");
    i=i+1;
}

//arrays y objetos
const array = [1,2,"jaja",true,null];
const obj = {
    nombre:'ivan',
    edad:30,
    comidasFavoritas: ['pollo frito','ceviche']
}
console.log(array[2]);
console.log(obj.comidasFavoritas[1]);
console.log(obj['comidasFavoritas'])

array.forEach(element => {
    console.log(element)
});

for (e in array){
    console.log(array[e]);
}

//convertir en array mi objeto:
Object.values(obj);
console.log(Object.values(obj));

