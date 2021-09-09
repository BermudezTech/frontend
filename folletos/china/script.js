function nextPage(){
	document.getElementById('vista1').style.display = 'none';
	document.getElementById('vista2').style.display = 'grid';
	document.getElementById('next').style.display = 'none';
	document.getElementById('previous').style.display = 'block';
}
function previousPage(){
	document.getElementById('vista1').style.display = 'grid';
	document.getElementById('vista2').style.display = 'none';
	document.getElementById('previous').style.display = 'none';
	document.getElementById('next').style.display = 'block';
}
function showModal(name){
	document.getElementById(name).style.display = 'flex';
}
function closeModal(name){
	document.getElementById(name).style.display = 'none';
}
function cargada(){
	document.getElementById('cargada').style.display = 'none';
}