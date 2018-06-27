/* Holiii acá va tu código también */
//Login validacion de correo, contraseña
const btnLogin = document.getElementById('buttonLogin');//boton login que al hacer click valida los inputs
btnLogin.addEventListener('click', () => {//funcion para validar los campos
	const validarMail = document.getElementById('boxMail').value;//guardo en una variable y extraigo lo ingresado por el usuario
		if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(validarMail)){//validar si es o no un mail correcto
    } else {
   		alert("La dirección de email es incorrecta!.");
   	}
   	const validarContraseña = document.getElementById('boxContraseña').value;
   	
   if (validarContraseña.length <= 8 ) {
		}else{
			alert("contraseña muy larga");
		}
	 if (validarContraseña < 48 || validarContraseña > 57) {
	 	alert("funciona");
		}else{
			alert("solo numeros");
		}
	});

