

		/*var formulario = document.getElementById('formulario');

		var nombre = formulario.nombre;
		var email=formulario.email;
		var telefono=formulario.telefono;
		var colonia=formulario.colonia;
		var razon1=formulario.razon1;
		var razon2=formulario.razon2;
		var razon3=formulario.razon3;
		var razon4=formulario.razon4;
		var razon5=formulario.razon5;
		var error = document.getElementById('error');*/

/*const btnEnviar = document.querySelector('#enviar');

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const colonia = document.querySelector('#colonia');
const razon1 = document.querySelector('#razon1');
const razon2 = document.querySelector('#razon2');
const razon3 = document.querySelector('#razon3');
const razon4 = document.querySelector('#razon4');
const razon5 = document.querySelector('#razon5');
var error = document.getElementById('error');*/


		
	// Funcion encargada de validar todos los campos
	function  validarForm(e){
		// Reiniciamos el error para que inicie sin mensaje.
		error.innerHTML = ''

		validarNombre(e)
		validarCorreo(e)
		validarTelefono(e)
		validarColonia(e)
		validarRazones(e)

	}


	function validarNombre(e){
		if (nombre.value ==  '' || nombre.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor escribe tu nombre</li>';
			e.preventDefault();
		}
	}

	function validarCorreo(e){
		if (email.value == '' || email.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor escribe tu correo</li>';
			e.preventDefault();
		}
		/*}else{
			if( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value)){
			error.style.display = 'none';
			error.innerHTML += '<li>Por favor escribe un correo válido</li>';
			e.preventDefault();
			}
		}*/
	}

	function validarTelefono(e){
		if (telefono.value == '' || telefono.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresa tu teléfono</li>';
			e.preventDefault();
		}
	}


	function validarColonia(e){
		if (colonia.value == '' || colonia.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor selecciona tu colonia</li>';
			e.preventDefault();
		}
	}

	function validarRazones(e){
		if (!razon1.checked == false && !razon2.checked == false && !razon3.checked == false
			&& !razon4.checked == false && !razon5.checked == false ){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor selecciona alguna opción</li>';
			e.preventDefault();
		} 	
	}

	console.log(nombre.value);
 	console.log(email);
 	console.log(telefono);
 	console.log(colonia);
    //console.log(razon1.value);
 	console.log(mensaje);

	formulario.addEventListener('submit' , validarForm);
	

	//Falcon Masters//
	