
const elementos_li = document.getElementsByTagName("li");

function pintarCliqueLi(evento) {

	const elemento = evento.target;
	const ancora = elemento.getElementsByTagName("a")[0]

	elemento.style.color = "#CF5E4A";
	elemento.style.borderColor = "#CF5E4A";
	ancora.style.color = "#CF5E4A";
}

function despintarCliqueLi(evento) {

	const elemento = evento.target;
	const ancora = elemento.getElementsByTagName("a")[0]

	elemento.style.color = "#FFFFFF";
	elemento.style.borderColor = "#428C99";
	ancora.style.color = "#FFFFFF";

	window.location.href = ancora.href;
}

for (var i = 0; i < elementos_li.length; i++) {
	elementos_li[i].addEventListener("mousedown", pintarCliqueLi, false);
	elementos_li[i].addEventListener("mouseup", despintarCliqueLi, false);
}

