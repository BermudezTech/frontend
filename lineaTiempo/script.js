window.addEventListener('scroll', function(){
	let animado = document.getElementsByClassName('circle2');
	let scrollTop = document.documentElement.scrollTop;
	let ventana = window.innerHeight - 430;
	for (var i = animado.length - 1; i >= 0; i--) {
		let alturaAnimado = animado[i].offsetTop;
		if(alturaAnimado - ventana < scrollTop && scrollTop < alturaAnimado -ventana + 200){
			animado[i].setAttribute("estado", "visible");
		}else{
			animado[i].setAttribute("estado", "invisible");
		}
		//console.log(alturaAnimado-ventana + " " + scrollTop);
	}
	let animado2 = document.getElementsByClassName('info');
	for (var i = animado2.length - 1; i >= 0; i--) {
		let alturaAnimado = animado2[i].offsetTop;
		if(alturaAnimado - ventana < scrollTop && scrollTop < alturaAnimado -ventana + 200){
			animado2[i].setAttribute("estado", "visible");
		}else{
			animado2[i].setAttribute("estado", "invisible");
		}
		//console.log(alturaAnimado-ventana + " " + scrollTop);
	}
	let animado3 = document.getElementsByClassName('img');
	for (var i = animado3.length - 1; i >= 0; i--) {
		let alturaAnimado = animado3[i].offsetTop;
		if(alturaAnimado - ventana < scrollTop && scrollTop < alturaAnimado -ventana + 200){
			animado3[i].setAttribute("estado", "visible");
		}else{
			animado3[i].setAttribute("estado", "invisible");
		}
		//console.log(alturaAnimado-ventana + " " + scrollTop);
	}
});

function createTimeDate($fecha, $img, $content){
	document.getElementById('fechas').innerHTML += "<div class='fecha'><div class='number'>"+ $fecha +"</div><div class='linea'><div class='line1'></div><div class='circle'><div class='circle2' estado='invisible'></div></div><div class='line2'></div></div><div class='info' estado='invisible'>" + $content + "</div><div class='img' estado='invisible'><img src='" + $img + "'></div></div>";
}