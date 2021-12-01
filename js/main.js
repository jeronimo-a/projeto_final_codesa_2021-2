
const ancoras = document.getElementsByTagName("a");

function liDown(evento) {

	const elemento = evento.target;
	const ancora = elemento.getElementsByTagName("a")[0];

	ancora.style.color = "#CF5E4A";
	elemento.style.color = "#CF5E4A";
	elemento.style.borderColor = "#CF5E4A";
}

function liUp(evento) {

	const elemento = evento.target;
	const ancora = elemento.getElementsByTagName("a")[0];

	ancora.style.color = "white";
	elemento.style.color = "#white";
	elemento.style.borderColor = "#428C99";

	document.location = ancora.href;
}

function aDown(evento) {

	const ancora = evento.target;
	const elemento = ancora.parentElement;

	ancora.style.color = "#CF5E4A";
	elemento.style.color = "#CF5E4A";
	elemento.style.borderColor = "#CF5E4A";
}

function aUp(evento) {

	const ancora = evento.target;
	const elemento = ancora.parentElement;

	ancora.style.color = "white";
	elemento.style.color = "#white";
	elemento.style.borderColor = "#428C99";
}

function aDownImg(evento) {

	const imagem = evento.target;
	var arquivo_imagem = imagem.src;
	arquivo_imagem = arquivo_imagem.slice(0, -4);
	arquivo_imagem += "_clicado.jpg";
	imagem.src = arquivo_imagem;
}

function aUpImg(evento) {

	const imagem = evento.target;
	var arquivo_imagem = imagem.src;
	arquivo_imagem = arquivo_imagem.slice(0, -12);
	arquivo_imagem += ".jpg";
	imagem.src = arquivo_imagem;
}

for (var i = 0; i < ancoras.length; i++) {

	const ancora = ancoras[i];
	const elemento = ancora.parentElement;

	if (elemento.nodeName == "HEADER") {
		ancora.addEventListener("mousedown", aDownImg, false);
		ancora.addEventListener("mouseup", aUpImg, false);

	} else {

		ancora.addEventListener("mousedown", aDown, false);
		ancora.addEventListener("mouseup", aUp, false);

		if (elemento.nodeName == "LI") {
			elemento.addEventListener("mousedown", liDown, false);
			elemento.addEventListener("mouseup", liUp, false);
		}
	}
}





