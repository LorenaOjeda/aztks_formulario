"use stric";

// Var se utiliza para nivel de bloque de código
// Let se utiliza para nivel de bloque de código más pequeño
// Const no permite cambiar valor

// var saludo1 = 'Saludo1 desde fuera'
// let saludo2 = 'Saludo 2';
// const saludo = 'Hola mundo';

const saludo = 'Hola mundo';

const validarFormulario = () => {

    const formulario = document.getElementById('formulario');
    
    // Referencias al nombre
    let inputNombre = document.querySelector('#nombre');
    let nombre = document.getElementById('nombre').value; // Nombre valor
    let errores = document.getElementById('errorNombre'); // 

    if (!nombre) {
        errores.innerHTML = `<span style="color: red;">* Campo requerido</span>`
        inputNombre.style.borderColor = 'red';
    } else {
        inputNombre.style.borderColor = 'green';
        errores.style.display = 'none';
    }

    // Referencia al correo
    let inputCorreo = document.querySelector('#email');
    let correo = document.getElementById('email').value;
    let errorCorreo = document.querySelector('#errorCorreo');

    if (!correo) {
        errorCorreo.innerHTML = `<span style="color: red;">* Correo requerido</span>`
        inputCorreo.style.borderColor = 'red';
    } else {
        inputCorreo.style.borderColor = 'green';
        errorCorreo.style.display = 'none';
    }

    // Referencia al numero
    let inputTelefono = document.querySelector('#telefono');
    let telefono = document.getElementById('telefono').value;
    let errorTelefono = document.querySelector('#errorTelefono');

    if (!telefono) {
        errorTelefono.innerHTML = `<span style="color: red;">* Teléfono requerido</span>`
        inputTelefono.style.borderColor = 'red';
    } else if (telefono.length < 10) {
        errorTelefono.innerHTML = `<span style="color: red;">* El Teléfono debe tener al menos 10 números</span>`
        inputTelefono.style.borderColor = 'red';
    } else {
        inputTelefono.style.borderColor = 'green';
        errorTelefono.style.display = 'none';
    }

    // COLONIA
    let coloniaSelect = document.querySelector('#colonia');
    let coloniaRef = document.querySelector('#colonia').value;
    let coloniaError = document.querySelector('#coloniaError');

    if (coloniaRef == 0) {
        coloniaSelect.style.borderColor = 'red';
        coloniaError.innerHTML = `<p style="color: red;">* Colonia requerida</p>`
    } else {
        coloniaSelect.style.borderColor = 'green';
        coloniaError.style.display = 'none';
    }

    // MENSAJE
    let mensageRef = document.querySelector('#mensaje');
    let mensaje = document.querySelector('#mensaje').value;
    let mensajeRequerido = document.querySelector('#mensajeRequerido');

    if(mensageRef.value.length <= 0) {
        mensageRef.style.borderColor = 'red';
        mensajeRequerido.innerHTML = `<p style="color: red;">* Mensaje requerido</p>`
    } else {
        mensageRef.style.borderColor = 'green';
        mensajeRequerido.style.display = 'none';
    }

    // CHECKBOX
    let razones = document.querySelectorAll('.razones');
    let errrorRazones = document.getElementById('RazonError');

    let razonesSinChecked = [];
    let valorCheckbox = '';

    razones.forEach(razon => {
        if (!razon.checked) {
            razonesSinChecked.push(razon);
        } else {
            valorCheckbox = razon.value
        }
    })

    if (razonesSinChecked.length == 5) {
        errrorRazones.innerHTML = '<p style="color: red;">Debe elegir al menos una razón</p>'
    } else {
        errrorRazones.style.display = 'none';
    }


    // REFERENCIA AL DIV FORMULARIOS 
    const formulariosDiv = document.getElementById('formularios');

    if (nombre && correo && telefono && telefono.length >= 10 && coloniaRef && valorCheckbox && mensaje) {

        const formularios = [];

        // CREAR OBJETO
        let valorDelFormulario = {
            nombre,
            correo,
            telefono,
            coloniaRef,
            valorCheckbox,
        }
        
        formularios.push(valorDelFormulario)

        const formulariosLocal = localStorage.getItem('formularios');

        const formulariosViejos = Object.keys(formulariosLocal).map(function(_) { return formulariosLocal[_] })
        console.log(formulariosViejos);


        // localStorage.setItem('formularios', JSON.stringify(formularios));
    
        // Agregamos al array
        // formulariosValidos.push(valorDelFormulario);
        // formularios.innerHTML = `
        // <ul>
        //     <li>${valorDelFormulario.nombre}</li>
        //     <li>${valorDelFormulario.correo}</li>
        //     <li>${valorDelFormulario.telefono}</li>
        //     <li>${valorDelFormulario.coloniaRef}</li>
        //     <li>${valorDelFormulario.valorCheckbox}</li>
        // </ul>
        // `


        // Limpiamos el formulario
        formulario.reset();

        // Cambiamos color de los inputs
        inputNombre.style.borderColor   = 'gray';
        inputCorreo.style.borderColor   = 'gray';
        inputTelefono.style.borderColor = 'gray';
        coloniaSelect.style.borderColor = 'gray';
        mensageRef.style.borderColor    = 'gray';
        
    }

};