'use strict';
const btn = document.querySelector('#btn');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const colonia = document.querySelector('#colonia');
const mensaje = document.querySelector('#mensaje');
const razon1 = document.querySelector('#razon1');

let validar = () =>{
    let inputs_requeridos = document.querySelectorAll('#formulario [required]');
    let error = false;

    for(let i=0; i<inputs_requeridos.length; i++){
        if(inputs_requeridos[i].value == ''){
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        }else{
            inputs_requeridos[i].classList.remove('input-error');
        }
    }

    return error;
};

let obtener_datos = () => {
    let error = validar();

    if (error) {
        alert('Sus datos no se pudieron enviar');
    }else{
        alert('Sus datos han sido enviados');
    }
    console.log(nombre.value);
 	console.log(email.value);
 	console.log(telefono.value);
 	console.log(colonia.value);
    console.log(razon1.value);
 	console.log(mensaje.value);
};

btn.addEventListener('click', obtener_datos);


//https://www.youtube.com/watch?v=ibOLpTvigE0//
//https://byspel.com/validar-checkbox-html-javascript///

//si funciona pero solo bordes rojos sin propiedad style y me faltan los checkbox//