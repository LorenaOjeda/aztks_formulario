const btnEnviar = document.querySelector('#enviar');

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');

eventListeners();
function eventListeners() {
    //document.addEventListener('DOMContentLoaded', iniciarApp);//

    email.addEventListener('blur',validarFormulario);
}

function validarFormulario(e){
    if(e.target.value.length>0) {
        e.target.style.borderColor = "green";
    }else{
        e.target.style.borderColor = "red";
    }
}


// 	const formulario = document.querySelector('.formulario');

// const nombre = document.querySelector('#nombre');
// const correo = document.querySelector('#email');
// const telefono = document.querySelector('#telefono');
// const colonia = document.querySelector('#colonia');
// const mensaje = document.querySelector('#mensaje');
// const razon1 = document.querySelector('#razon1');


// formulario.addEventListener('submit', e => {
// 	e.preventDefault();
// 	console.log(nombre.value);
// 	console.log(correo.value);
// 	console.log(telefono.value);
// 	console.log(colonia.value);
// 	console.log(mensaje.value);
	
	
	
// })

//COPIA DEL ORIGINAL 
// var formulario = document.getElementById("formulario");

// 		var nombre = formulario.nombre;
// 		var email=formulario.email;
// 		var telefono=formulario.telefono;
// 		var colonia=formulario.colonia;
// 		var razon1=formulario.razon1;
// 		var razon2=formulario.razon2;
// 		var razon3=formulario.razon3;
// 		var razon4=formulario.razon4;
// 		var razon5=formulario.razon5;
// 		error = document.getElementById('error');

// 	// Funcion encargada de validar todos los campos
// 	function  validarForm(e){
// 		// Reiniciamos el error para que inicie sin mensaje.
// 		error.innerHTML = '';

// 		validarNombre(e);
// 		validarCorreo(e);
// 		validarTelefono(e);
// 		validarColonia(e);
// 		validarRazones(e);

// 	}


// 	function validarNombre(e){
// 		if (nombre.value == '' || nombre.value == null){
// 			error.style.display = 'block';
// 			error.innerHTML += '<li>Por favor escribe tu nombre</li>';
// 			e.preventDefault();
// 		}
// 	}

// 	function validarCorreo(e){
// 		if (email.value == '' || email.value == null){
// 			error.style.display = 'block';
// 			error.innerHTML += '<li>Por favor escribe tu correo</li>';
// 			e.preventDefault();
// 		/*}else{
// 			if( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value)){
				
			
// 			} else {
// 			error.style.display = 'none';
// 			error.innerHTML += '<li>Por favor escribe un correo válido</li>';
// 			e.preventDefault();*/
// 			}
// 		}
	

// 	function validarTelefono(e){
// 		if (telefono.value == '' || telefono.value == null){
// 			error.style.display = 'block';
// 			error.innerHTML += '<li>Por favor ingresa tu teléfono</li>';
// 			e.preventDefault();
// 		}
// 	}


// 	function validarColonia(e){
// 		if (colonia.value == '' || colonia.value == null){
// 			error.style.display = 'block';
// 			error.innerHTML += '<li>Por favor selecciona tu colonia</li>';
// 			e.preventDefault();
// 		}
// 	}

// 	function validarRazones(e){
// 		if (!razon1.checked == false && !razon2.checked == false && !razon3.checked == false
// 			&& !razon4.checked == false && !razon5.checked == false ){
// 			error.style.display = 'block';
// 			error.innerHTML += '<li>Por favor selecciona alguna opción</li>';
// 			e.preventDefault();
// 		} 	
// 	}
	

	
// 	formulario.addEventListener('submit', validarForm);

//CODIGO LIBRE YOUTUBE
