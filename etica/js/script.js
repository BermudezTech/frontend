var introduccion = document.getElementById("introduccion");
personajes.addEventListener("click", abrirPersonajes);
function abrirPersonajes(){
	$("#contenedor").load("personajes.html");
	setTimeout('fondoScale()', 1000);
}
introduccion.addEventListener("click", abrirIntroduccion);
function abrirIntroduccion(){
	$("#contenedor").load("introduccion.html");
	setTimeout('asignarBoton()', 1000);
}

function asignarBoton(){
	document.getElementById("personajes").addEventListener("click", abrirPersonajes);
}

function fondoScale(){
	document.getElementById("contenedor").style.backgroundSize = "cover";
	var socrates = document.getElementById("socrates");
	var platon = document.getElementById("platon");
	var aristoteles = document.getElementById("aristoteles");
	var tomasdeaquino = document.getElementById("tomasdeaquino");
	var kant = document.getElementById("kant");
	var schopenhauer = document.getElementById("schopenhauer");
	var nietzsche = document.getElementById("nietzsche");
	var resumen = document.getElementById("resumen");
	var titulo = document.getElementById("titulo");
	var cerrar = document.getElementById("cerrar");
	socrates.addEventListener('click', abrirPersonaje);
	platon.addEventListener('click', abrirPersonaje);
	aristoteles.addEventListener('click', abrirPersonaje);
	tomasdeaquino.addEventListener('click', abrirPersonaje);
	kant.addEventListener('click', abrirPersonaje);
	schopenhauer.addEventListener('click', abrirPersonaje);
	nietzsche.addEventListener('click', abrirPersonaje);
	resumen.addEventListener('click', abrirPersonaje);
	cerrar.addEventListener('click', cerrarPersonaje);
}

function abrirPersonaje(){
	var socrates = document.getElementById("socrates");
	var platon = document.getElementById("platon");
	var aristoteles = document.getElementById("aristoteles");
	var tomasdeaquino = document.getElementById("tomasdeaquino");
	var kant = document.getElementById("kant");
	var schopenhauer = document.getElementById("schopenhauer");
	var nietzsche = document.getElementById("nietzsche");
	var resumen = document.getElementById("resumen");
	var titulo = document.getElementById("titulo");
	var cerrar = document.getElementById("cerrar");
	switch(this.id){
		case "socrates":
			platon.style.visibility = "hidden";
			aristoteles.style.visibility = "hidden";
			tomasdeaquino.style.visibility = "hidden";
			kant.style.visibility = "hidden";
			schopenhauer.style.visibility = "hidden";
			nietzsche.style.visibility = "hidden";
			resumen.style.visibility = "hidden";
		break;
		case "platon":
			socrates.style.visibility = "hidden";
			aristoteles.style.visibility = "hidden";
			tomasdeaquino.style.visibility = "hidden";
			kant.style.visibility = "hidden";
			schopenhauer.style.visibility = "hidden";
			nietzsche.style.visibility = "hidden";
			resumen.style.visibility = "hidden";
		break;
		case "aristoteles":
			socrates.style.visibility = "hidden";
			platon.style.visibility = "hidden";
			tomasdeaquino.style.visibility = "hidden";
			kant.style.visibility = "hidden";
			schopenhauer.style.visibility = "hidden";
			nietzsche.style.visibility = "hidden";
			resumen.style.visibility = "hidden";
		break;
		case "tomasdeaquino":
			socrates.style.visibility = "hidden";
			aristoteles.style.visibility = "hidden";
			platon.style.visibility = "hidden";
			kant.style.visibility = "hidden";
			schopenhauer.style.visibility = "hidden";
			nietzsche.style.visibility = "hidden";
			resumen.style.visibility = "hidden";
		break;
		case "kant":
			socrates.style.visibility = "hidden";
			aristoteles.style.visibility = "hidden";
			tomasdeaquino.style.visibility = "hidden";
			platon.style.visibility = "hidden";
			schopenhauer.style.visibility = "hidden";
			nietzsche.style.visibility = "hidden";
			resumen.style.visibility = "hidden";
		break;
		case "schopenhauer":
			socrates.style.visibility = "hidden";
			aristoteles.style.visibility = "hidden";
			tomasdeaquino.style.visibility = "hidden";
			kant.style.visibility = "hidden";
			platon.style.visibility = "hidden";
			nietzsche.style.visibility = "hidden";
			resumen.style.visibility = "hidden";
		break;
		case "nietzsche":
			socrates.style.visibility = "hidden";
			aristoteles.style.visibility = "hidden";
			tomasdeaquino.style.visibility = "hidden";
			kant.style.visibility = "hidden";
			schopenhauer.style.visibility = "hidden";
			platon.style.visibility = "hidden";
			resumen.style.visibility = "hidden";
		break;
		case "resumen":
			socrates.style.visibility = "hidden";
			aristoteles.style.visibility = "hidden";
			tomasdeaquino.style.visibility = "hidden";
			kant.style.visibility = "hidden";
			schopenhauer.style.visibility = "hidden";
			platon.style.visibility = "hidden";
			nietzsche.style.visibility = "hidden";
		break;
	}
	var diff = this.getBoundingClientRect().top - titulo.getBoundingClientRect().top;
	diff = diff * -1;
	var diff2 = this.getBoundingClientRect().left - titulo.getBoundingClientRect().left;
	diff2 = diff2 * -1;
	this.style.transform = "translateY("+diff+"px) translateX("+diff2+"px)";
	this.className = "personajeactivo";
	$("#maincontenido").load(this.id + ".html");
	titulo.style.visibility = "hidden";
	document.getElementById("contenido").style.visibility = "visible";
	console.log(this.id);
	this.disabled = true;
	cerrar.id = this.id;
	contenido.scrollTop = 0;
}

function cerrarPersonaje(){
	var socrates = document.getElementById("socrates");
	var platon = document.getElementById("platon");
	var aristoteles = document.getElementById("aristoteles");
	var tomasdeaquino = document.getElementById("tomasdeaquino");
	var kant = document.getElementById("kant");
	var schopenhauer = document.getElementById("schopenhauer");
	var nietzsche = document.getElementById("nietzsche");
	var resumen = document.getElementById("resumen");
	var titulo = document.getElementById("titulo");
	var cerrar = document.getElementById("cerrar");
	document.getElementById("contenido").style.visibility = "hidden";
	socrates.style.transform = "translateY(0px) translateX(0px)";
	platon.style.transform = "translateY(0px) translateX(0px)";
	aristoteles.style.transform = "translateY(0px) translateX(0px)";
	tomasdeaquino.style.transform = "translateY(0px) translateX(0px)";
	kant.style.transform = "translateY(0px) translateX(0px)";
	schopenhauer.style.transform = "translateY(0px) translateX(0px)";
	nietzsche.style.transform = "translateY(0px) translateX(0px)";
	resumen.style.transform = "translateY(0px) translateX(0px)";
	switch(this.id){
		case "socrates":
			socrates.disabled = false;
			platon.style.visibility = "visible";
			aristoteles.style.visibility = "visible";
			tomasdeaquino.style.visibility = "visible";
			kant.style.visibility = "visible";
			schopenhauer.style.visibility = "visible";
			nietzsche.style.visibility = "visible";
			resumen.style.visibility = "visible";
		break;
		case "platon":
			platon.disabled = false;
			socrates.style.visibility = "visible";
			aristoteles.style.visibility = "visible";
			tomasdeaquino.style.visibility = "visible";
			kant.style.visibility = "visible";
			schopenhauer.style.visibility = "visible";
			nietzsche.style.visibility = "visible";
			resumen.style.visibility = "visible";
		break;
		case "aristoteles":
			aristoteles.disabled = false;
			socrates.style.visibility = "visible";
			platon.style.visibility = "visible";
			tomasdeaquino.style.visibility = "visible";
			kant.style.visibility = "visible";
			schopenhauer.style.visibility = "visible";
			nietzsche.style.visibility = "visible";
			resumen.style.visibility = "visible";
		break;
		case "tomasdeaquino":
			tomasdeaquino.disabled = false;
			socrates.style.visibility = "visible";
			aristoteles.style.visibility = "visible";
			platon.style.visibility = "visible";
			kant.style.visibility = "visible";
			schopenhauer.style.visibility = "visible";
			nietzsche.style.visibility = "visible";
			resumen.style.visibility = "visible";
		break;
		case "kant":
			kant.disabled = false;
			socrates.style.visibility = "visible";
			aristoteles.style.visibility = "visible";
			tomasdeaquino.style.visibility = "visible";
			platon.style.visibility = "visible";
			schopenhauer.style.visibility = "visible";
			nietzsche.style.visibility = "visible";
			resumen.style.visibility = "visible";
		break;
		case "schopenhauer":
			schopenhauer.disabled = false;
			socrates.style.visibility = "visible";
			aristoteles.style.visibility = "visible";
			tomasdeaquino.style.visibility = "visible";
			kant.style.visibility = "visible";
			platon.style.visibility = "visible";
			nietzsche.style.visibility = "visible";
			resumen.style.visibility = "visible";
		break;
		case "nietzsche":
			nietzsche.disabled = false;
			socrates.style.visibility = "visible";
			aristoteles.style.visibility = "visible";
			tomasdeaquino.style.visibility = "visible";
			kant.style.visibility = "visible";
			schopenhauer.style.visibility = "visible";
			platon.style.visibility = "visible";
			resumen.style.visibility = "visible";
		break;
		case "resumen":
			resumen.disabled = false;
			socrates.style.visibility = "visible";
			aristoteles.style.visibility = "visible";
			tomasdeaquino.style.visibility = "visible";
			kant.style.visibility = "visible";
			schopenhauer.style.visibility = "visible";
			platon.style.visibility = "visible";
			nietzsche.style.visibility = "visible";
		break;
	}
	titulo.style.visibility = "visible";
	this.id = "cerrar";
}

function eliminarCarga(){
	document.getElementById("cargando").style.display = "none";
}

function eliminarCarga2(){
	document.getElementById("cargando2").style.display = "none";
}

//contenedor.innerHTML = "Hola mundo. Bienvenido.";