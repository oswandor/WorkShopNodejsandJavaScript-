// selector porByID  
var thisIsDiv =document.getElementById("box"); 


//selector por elemento Buttton 
const button = document.querySelector('button');

// cuando ocurra un evento onclick  ejecutar la funcion 
button.onclick = function() {
    //Mostrar un promt y alamcernar el nombre 
    let name = prompt('¿Cuál es tu nombre?');
    // mostrar un alert con su nombre 
     alert('¡Hola ' + name + ', encantado de verte!');
    // ingresar en el Div  la informacion del nombre 
    thisIsDiv.innerHTML += '¡Hola ' + name + ', encantado de verte!' ; 
}


import { nombre } from "./exportacionDeModulos";
 
console.log(nombre)